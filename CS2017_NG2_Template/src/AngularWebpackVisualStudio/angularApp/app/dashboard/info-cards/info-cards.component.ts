import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-info-cards',
	templateUrl: './info-cards.component.html',
	encapsulation: ViewEncapsulation.None
})
export class InfoCardsComponent {
	public seriesData: number[] = [20, 40, 45, 30, 50];
	public categories: string[] = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
}
