import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product détail';
  product: IProduct | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute, 
                      private router:Router, 
                      private productService: ProductService) {
     
   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    //this.pageTitle += `: ${id}`;
    //this.pageTitle;
    
    if(param){
      const id = +param;
      this.getProduct(id);
    }
  }

  //Function vue détail
  getProduct(id: number){
    this.productService.getProduct(id).subscribe({
      next: (product: IProduct) => this.product = product,
      error: (err: string) => this.errorMessage = err
    });
  }

  //function pour le bouton return
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
