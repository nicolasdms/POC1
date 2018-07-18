export class Settings {
	constructor(
		public name: string,
		public title: string,
		public theme: {
			menu: string;
			menuType: string;
			navbarIsFixed: boolean;
			footerIsFixed: boolean;
			sidebarIsFixed: boolean;
			sideChatIsHoverable: boolean;
			skin: string;
			showMenu: boolean;
			showSideChat: boolean;
			showSetting: boolean;
			showTopCollapsibleContent: boolean;
		}
	) {}
}
