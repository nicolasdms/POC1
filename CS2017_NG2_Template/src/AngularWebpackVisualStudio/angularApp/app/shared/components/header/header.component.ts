import {
	Component,
	OnInit,
	ViewEncapsulation,
	HostListener,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/animations';

import { Menu } from '../menu/menu.model';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [MenuService],
	animations: [
		trigger('showInfo', [
			state('1', style({ transform: 'rotate(180deg)' })),
			state('0', style({ transform: 'rotate(0deg)' })),
			transition('1 => 0', animate('400ms')),
			transition('0 => 1', animate('400ms'))
		])
	]
})
export class HeaderComponent implements OnInit {
	public showHorizontalMenu = true;
	public settings: Settings;
	public menuItems: Array<Menu>;
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		public appSettings: AppSettings,
		public menuService: MenuService
	) {
		this.settings = this.appSettings.settings;
		this.menuItems = this.menuService.getMenuItems();
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId) && window.innerWidth <= 768) {
			this.showHorizontalMenu = false;
		}
	}

	@HostListener('window:resize')
	public onWindowResize(): void {
		if (isPlatformBrowser(this.platformId)) {
			if (window.innerWidth <= 768) {
				this.showHorizontalMenu = false;
			} else {
				this.showHorizontalMenu = true;
			}
		}
	}
}
