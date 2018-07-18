import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
	public settings = new Settings(
		'DWRE',
		'Angular Admin Template with Bootstrap 4',
		{
			menu: 'vertical', // horizontal , vertical
			menuType: 'default', // default, compact, mini
			navbarIsFixed: true,
			footerIsFixed: true,
			sidebarIsFixed: true,
			sideChatIsHoverable: true,
			skin: 'combined', // light , dark, blue, green, combined, purple, orange, brown, grey, pink
			showMenu: true,
			showSideChat: false,
			showSetting: false,
			showTopCollapsibleContent: false
		}
	);
}
