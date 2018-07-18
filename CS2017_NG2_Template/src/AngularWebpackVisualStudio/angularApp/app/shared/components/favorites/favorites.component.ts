import {
	Component,
	ViewEncapsulation,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
	IMultiSelectOption,
	IMultiSelectSettings,
	IMultiSelectTexts
} from 'angular-2-dropdown-multiselect';
import { MenuService } from '../menu/menu.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [MenuService]
})
export class FavoritesComponent {
	public favoriteModel: number[] = [];
	public favoriteSettings: IMultiSelectSettings = {
		enableSearch: true,
		checkedStyle: 'fontawesome',
		buttonClasses: 'btn btn-secondary btn-block',
		dynamicTitleMaxItems: 0,
		displayAllSelectedText: true
	};
	public favoriteTexts: IMultiSelectTexts = {
		checkAll: 'Séléctionner tous',
		uncheckAll: 'Deséléctionner tous',
		checked: 'Favoris selectionné',
		checkedPlural: 'Favoris selectionnés',
		searchPlaceholder: 'Trouver un favoris...',
		defaultTitle: 'Choisir ses favoris',
		allSelected: 'Tous selectionnés'
	};
	public favoriteOptions: IMultiSelectOption[] = [];
	public menuItems: Array<any>;
	public toggle: boolean;
	public favorites: Array<any> = [];
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		public menuService: MenuService
	) {
		this.menuItems = this.menuService
			.getMenuItems()
			.filter(
				menu => menu.routerLink !== undefined || menu.href !== undefined
			);
		this.menuItems.forEach(item => {
			const menu = {
				id: item.id,
				name: item.title,
				routerLink: item.routerLink,
				href: item.href,
				icon: item.icon,
				target: item.target
			};
			this.favoriteOptions.push(menu);
		});
		if (isPlatformBrowser(this.platformId) && sessionStorage['favorites']) {
			this.favorites = JSON.parse(sessionStorage.getItem('favorites'));
			this.favorites.forEach(favorite => {
				this.favoriteModel.push(favorite.id);
			});
		}
	}

	public onDropdownOpened() {
		this.toggle = true;
	}
	public onDropdownClosed() {
		this.toggle = false;
	}

	public onChange() {
		this.favorites.length = 0;
		this.favoriteModel.forEach(i => {
			this.favorites.push(
				this.favoriteOptions.find(mail => mail.id === +i)
			);
		});
		if (isPlatformBrowser(this.platformId)) {
			sessionStorage.setItem('favorites', JSON.stringify(this.favorites));
		}
	}
}
