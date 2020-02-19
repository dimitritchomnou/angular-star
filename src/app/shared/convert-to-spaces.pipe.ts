//Importation du Pipe
import {Pipe, PipeTransform} from '@angular/core';

//décorateur Pipe
@Pipe({
	// creation du décorateur pour la page html
	name: 'convertToSpaces'
})
//creation de la classe ConvertToSpacesPipe
export class ConvertToSpacesPipe implements PipeTransform{
	transform(value: string, character: string): string{
	//console.log('test Pipe');
		return value.replace(character, ' ');
	}
}