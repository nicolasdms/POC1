import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-flags-menu',
	templateUrl: './flags-menu.component.html',
	styleUrls: ['./flags-menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {
	public listItems: Array<{ text: string; value: string }> = [
		{ text: 'Français', value: 'fr' },
		{ text: 'Anglais', value: 'gb' },
		{ text: 'Alemand', value: 'de' }
	];

	public selectedItem: { text: string; value: string } = this.listItems[0];

	constructor() {}

	ngOnInit() {}
}
