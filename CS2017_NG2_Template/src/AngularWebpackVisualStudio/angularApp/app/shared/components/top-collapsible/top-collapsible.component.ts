import { Component, ViewEncapsulation } from '@angular/core';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
	selector: 'app-top-collapsible',
	templateUrl: './top-collapsible.component.html',
	styleUrls: ['./top-collapsible.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TopCollapsibleComponent {
	public settings: Settings;

	constructor(public appSettings: AppSettings) {
		this.settings = this.appSettings.settings;
	}
}
