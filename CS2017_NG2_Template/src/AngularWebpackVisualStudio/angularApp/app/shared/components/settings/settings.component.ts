import {
	Component,
	OnInit,
	ViewEncapsulation,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	encapsulation: ViewEncapsulation.None
})
/* settings component*/
export class SettingsComponent implements OnInit {
	public showMenu = false;
	public showSetting = false;
	public menus = ['vertical', 'horizontal'];
	public menuOption: string;
	public menuTypes = ['default', 'compact', 'mini'];
	public menuTypeOption: string;
	public settings: Settings;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		public appSettings: AppSettings,
		public router: Router
	) {
		this.settings = this.appSettings.settings;
	}

	ngOnInit() {
		this.showMenu = this.settings.theme.showMenu;
		this.menuOption = this.settings.theme.menu;
		this.menuTypeOption = this.settings.theme.menuType;
	}

	public chooseMenu(menu: any) {
		this.settings.theme.menu = menu;
		// this.router.navigate(['/']);
	}

	public chooseMenuType(menuType: any) {
		this.settings.theme.menuType = menuType;
	}

	public changeTheme(theme: any) {
		this.settings.theme.skin = theme;
		if (isPlatformBrowser(this.platformId)) {
			sessionStorage['skin'] = theme;
		}
	}
}
