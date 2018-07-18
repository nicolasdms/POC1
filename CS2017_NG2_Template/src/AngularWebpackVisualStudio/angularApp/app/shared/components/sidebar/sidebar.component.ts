import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [MenuService]
})
export class SidebarComponent {
	public settings: Settings;
	constructor(public appSettings: AppSettings) {
		this.settings = this.appSettings.settings;
	}
}
