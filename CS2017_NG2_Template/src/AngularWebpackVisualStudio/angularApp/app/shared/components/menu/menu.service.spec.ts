// /// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
// import { Component } from '@angular/core';
// import { Location } from '@angular/common';
// import { TestBed, fakeAsync } from '@angular/core/testing';
// import { PanelBarItemModel } from '@progress/kendo-angular-layout';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router, Routes } from '@angular/router';

// import { MenuService } from './menu.service';
// import { Menu } from './menu.model';

// @Component({
// 	template: `test`
// })
// class DummyComponent {}

// describe('Menu Service', () => {
// 	let menuService: MenuService;
// 	const menus: Array<Menu> = [
// 		new Menu(
// 			1,
// 			'MENU1',
// 			'/app/1',
// 			undefined,
// 			'icon',
// 			undefined,
// 			undefined,
// 			false,
// 			0,
// 			false,
// 			[]
// 		),
// 		new Menu(
// 			2,
// 			'MENU2',
// 			'/app/2',
// 			undefined,
// 			'icon',
// 			undefined,
// 			undefined,
// 			false,
// 			0,
// 			false,
// 			[
// 				new Menu(
// 					2001,
// 					'Buttons',
// 					'/app/2/1',
// 					undefined,
// 					'icon',
// 					undefined,
// 					undefined,
// 					false,
// 					2,
// 					false,
// 					[]
// 				),
// 				new Menu(
// 					2002,
// 					'Buttons',
// 					'/app/2/2',
// 					undefined,
// 					'icon',
// 					undefined,
// 					undefined,
// 					false,
// 					2,
// 					false,
// 					[]
// 				)
// 			]
// 		),
// 		new Menu(
// 			3,
// 			'MENU3',
// 			'/app/3',
// 			undefined,
// 			'icon',
// 			undefined,
// 			undefined,
// 			false,
// 			0,
// 			false,
// 			[]
// 		)
// 	];
// 	let menuPanelBars: Array<PanelBarItemModel>;

// 	let location: Location;
// 	let router: Router;
// 	const routes: Routes = [
// 		{ path: '', redirectTo: 'app/1', pathMatch: 'full' },
// 		{ path: 'app/1', component: DummyComponent },
// 		{ path: 'app/2', component: DummyComponent },
// 		{ path: 'app/2/1', component: DummyComponent },
// 		{ path: 'app/2/2', component: DummyComponent },
// 		{ path: 'app/3', component: DummyComponent }
// 	];

// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			imports: [RouterTestingModule.withRoutes(routes)],
// 			declarations: [DummyComponent]
// 		});
// 		menuPanelBars = [];
// 		router = TestBed.get(Router);
// 		location = TestBed.get(Location);
// 		router.initialNavigation();

// 		//menuService = new MenuService(location);
// 	});

// 	// it(
// 	// 	'should transform menu in PanelBarItemModel',
// 	// 	fakeAsync(() => {
// 	// 		menuPanelBars = menuService.getPanelBarItems(menus);
// 	// 		expect(menuPanelBars.length).toBe(3);
// 	// 	})
// 	// );

// 	/*it('should set subitems selected', fakeAsync(() => {
//         this.MenuPanelBars = this.menuService.getPanelBarItems(menus);
//         router.navigate(['']);
//         tick();
//         this.menuService.setActiveLink(this.MenuPanelBars);
//         expect(location.path()).toBe('/home');
//     }));

//     it('should start with count 0, then increments by 1 when clicked', async(() => {
//         const countElement = fixture.nativeElement.querySelector('strong');
//         expect(countElement.textContent).toEqual('0');

//         const incrementButton = fixture.nativeElement.querySelector('button');
//         incrementButton.click();
//         fixture.detectChanges();
//         expect(countElement.textContent).toEqual('1');
//     }));*/
// });
