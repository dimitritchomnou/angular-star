//Classe service qui contient les données Json
import {Injectable} from '@angular/core';
//importation du service Http
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//Imporatation des opérateurs de gestion d'erreurs
import {catchError, tap, map} from 'rxjs/operators';
//importatation des observables
import {Observable, throwError} from 'rxjs';
import {IProduct} from './product';

//décorateur
@Injectable({
    providedIn: 'root'
})

export class ProductService{
  private productUrl = 'api/products/products.json';
  //contructor : injection
  constructor(private http: HttpClient){
  
  }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  //fonction pour vue détail
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  //méthode de gestion d'erreur
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error accurred : ${err.error.message}`;
    }else{
      errorMessage = `Server returned code : ${err.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}