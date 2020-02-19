import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    //Input() transmet les donnée du parent vers le fils 
    @Input() rating: number;
    starWidth: number;
    //transmettre les donnees au composant parent
    @Output() ratingClicked: EventEmitter<string> = 
            new EventEmitter<string>();

    ngOnChanges(): void{
        console.log('test star');
        this.starWidth = this.rating * 75/5;
    }

    //afficharge du message
    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked `);
    }

}