import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from './menu.model';
import { MenuItems } from './menu';

@Injectable()
export class MenuService {
	private menuItems: Array<Menu>;
	constructor(private router: Router) {
		this.menuItems = MenuItems;
	}

	public getMenuItems(): Array<Menu> {
		return this.menuItems;
	}

	public setActiveLink() {
		this.menuItems.forEach(m => this.setIsActive(m));
	}

	public setIsActive(menu: Menu): boolean {
		let isActive = false;
		if (menu.routerLink != null && menu.routerLink.length > 0) {
			if (this.router.isActive(menu.routerLink, false)) {
				isActive = true;
			}
		}
		if (menu.children.length > 0) {
			menu.children.forEach(m => {
				if (this.setIsActive(m)) {
					isActive = true;
				}
			});
		}
		menu.isActive = isActive;
		return isActive;
	}
}
