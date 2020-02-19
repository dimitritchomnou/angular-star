import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import FormsModule
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//importation du composent
import {ProductListComponent} from './products/product-list.component';
//Importation du composant Pipe
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
//importation du service Http
import {HttpClientModule} from '@angular/common/http';
//Importatotion pour le routing
import {RouterModule} from '@angular/router';
//importation du composant detail
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
//importation du compo Welcome
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    //déclaration du composant dans le module
    ProductListComponent,
    //daclaration du composant Pipe
    ConvertToSpacesPipe,
    //ajout  de star component
    StarComponent,
    //ajout du composant detail 
    ProductDetailComponent,
    //Ajout du composant Welcome
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    //ajout de FormsModule dans notre tableau
    FormsModule,
    //Ajoutons le service http dans notre tableau
    HttpClientModule,
    //Ajout servive routing
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      //déf de la route pour le passage de paramètre pour la vue détai
      {path: 'products/:id',  
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
