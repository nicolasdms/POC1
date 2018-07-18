import {
	Component,
	OnInit,
	AfterViewInit,
	ViewEncapsulation,
	HostListener,
	Inject,
	PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
	public showMenu = false;
	public showSetting = false;
	public menus = ['vertical', 'horizontal'];
	public menuOption: string;
	public menuTypes = ['default', 'compact', 'mini'];
	public menuTypeOption: string;
	public settings: Settings;
	private ESCAPE_KEYCODE = 27;
	// private platformId: Object;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		public appSettings: AppSettings,
		public router: Router
	) {
		// this.platformId = _platformId;
		this.settings = this.appSettings.settings;

		if (isPlatformBrowser(this.platformId) && sessionStorage['skin']) {
			this.settings.theme.skin = sessionStorage['skin'];
		}
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId) && window.innerWidth <= 768) {
			this.settings.theme.showMenu = false;
			this.settings.theme.sideChatIsHoverable = false;
		}
		this.showMenu = this.settings.theme.showMenu;
		this.menuOption = this.settings.theme.menu;
		this.menuTypeOption = this.settings.theme.menuType;
	}

	ngAfterViewInit() {
		setTimeout(() => {
			const d = document.getElementById('preloader');
			d.classList.add('hide');
			setTimeout(() => {
				d.remove();
				console.log('d.remove()');
			}, 500);
		}, 200);
	}

	@HostListener('window:resize')
	public onWindowResize(): void {
		const showMenu = !this._showMenu();

		if (this.showMenu !== showMenu) {
			this.showMenuStateChange(showMenu);
		}
		this.showMenu = showMenu;
	}

	public showMenuStateChange(showMenu: boolean): void {
		this.settings.theme.showMenu = showMenu;
	}

	@HostListener('window:keyup', ['$event'])
	public onKeydownHandler(event: any) {
		if (event.keyCode === this.ESCAPE_KEYCODE) {
			if (window.innerWidth <= 768 && this.settings.theme.showMenu) {
				this.settings.theme.showMenu = false;
			} else if (this.settings.theme.showTopCollapsibleContent) {
				this.settings.theme.showTopCollapsibleContent = false;
			} else if (this.settings.theme.showSetting) {
				this.settings.theme.showSetting = false;
			}
		}
	}

	private _showMenu(): boolean {
		return isPlatformBrowser(this.platformId)
			? window.innerWidth <= 768
			: true;
	}
}
