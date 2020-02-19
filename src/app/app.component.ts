//create the first componnent
import {Component} from '@angular/core';

//create decorator
@Component({
	//directive
	selector: 'pm-root',
	//vue 
	template: `
	<!--<div><h1>{{pageTitle}}</h1>
		directive appel du template 
		<pm-products></pm-products>
	</div>-->
	<!-- Creation du menu -->
	<nav class='navbar navbar-expand navbar-ligth bg-light'>
		<a class='navbar-brand'>{{pageTitle}}</a>
		<ul class='nav nav-pills'>
			<li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
			<li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
		</ul>
	</nav>
	<!-- <p>Affiche la vue du composant routé</p> -->
	<div class='container'>
		<router-outlet></router-outlet>
	</div>
	`

})
export class AppComponent{
	pageTitle: string = 'Acme Product Management';
}

