import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconsService } from './icons.service';
import { filterBy } from '@progress/kendo-data-query';

@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [IconsService]
})
export class IconsComponent implements OnInit {
	public icons: any;
	public searchText = '';

	constructor(private iconsService: IconsService) {
		this.icons = this.iconsService.getIcons();
	}

	ngOnInit() {}

	filterByName(data: Array<string>) {
		// return data;
		return filterBy(data, {
			logic: 'and',
			filters: [{ operator: 'contains', value: this.searchText }]
		});
	}
}
