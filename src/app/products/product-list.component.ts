
import {Component, OnInit} from '@angular/core';
//Importation de la classe interface
import {IProduct} from './product';
import { ProductService } from './product.service';
//décorateur en 2e
@Component({
	//selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

//Création de la classe ProductList en premier
export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product List';
	//dimension image
	//style pour image
	imageWidth: number = 50;
	imageMargin: number = 2;
	//proprieté pour cacher l'image
	showImage: boolean = false;
	//propriété msg error
	errorMessage: string;

	//propriété pour les filtres
	_listFilter: string;

	get listFilter(): string{
		return this._listFilter;
	}

	set listFilter(value: string){
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	//tableau  elts filtrés
	filteredProducts: IProduct[];
	//interface
	products: IProduct[] = [];

	//contructeur pour les filtres
	constructor(private productService: ProductService){
		//this.filteredProducts = this.products;
		//this.listFilter = 'cart';
	}

	//function affiche le meaage après le click sur un Rating
	onRatingClicked(message: string): void{
		console.log('test message après le click');
		this.pageTitle = `Product List : ${message}`;
	}

	//function de filtre performFilter
	performFilter(filterBy: string): IProduct[]{
		filterBy = filterBy.toLocaleLowerCase();
		// fix bug synthaxe function fleché filter
		return this.products.filter(product =>
			product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);//filtre sur le nom du produit
	}

	//méthode pour afficher image
	toggleImage(): void{
		this.showImage = !this.showImage;
	}

	ngOnInit(): void{
		//console.log('In OnInit');
		//Chargement de la liste de produit via la me get de la
		//la classe Service
		this.productService.getProducts().subscribe({
			next: products => {
				this.products = products,
				//filtrage de données
				this.filteredProducts = this.products
			},
			error: err => this.errorMessage = err
		});
		this.filteredProducts = this.products;
	}
}
