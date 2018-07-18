import {
	Component,
	ViewEncapsulation,
	OnInit,
	AfterViewInit,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./menu.component.scss']
})
/** menu component*/
export class MenuComponent implements OnInit, AfterViewInit {
	public menuItems: Array<Menu>;
	public settings: Settings;
	public config: PerfectScrollbarConfigInterface = {};

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private menuService: MenuService,
		private router: Router,
		public appSettings: AppSettings
	) {
		this.settings = this.appSettings.settings;
		this.menuItems = this.menuService.getMenuItems();

		this.router.events.subscribe(event => {
			if (
				isPlatformBrowser(this.platformId) &&
				event instanceof NavigationEnd
			) {
				window.scrollTo(0, 0);
				this.menuService.setActiveLink();
				if (window.innerWidth <= 768) {
					this.settings.theme.showMenu = false;
				}
			}
		});
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.menuService.setActiveLink();
		}
	}

	ngAfterViewInit() {
		this.menuService.setActiveLink();
	}
}
