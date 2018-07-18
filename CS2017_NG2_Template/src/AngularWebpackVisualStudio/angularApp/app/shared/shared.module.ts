import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@progress/kendo-angular-layout';
import {
	CollapseModule,
	AccordionModule,
	TooltipModule,
	TabsModule,
	BsDropdownModule
} from 'ngx-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

import { AppSettings } from '../app.settings';

import { PipesModule } from './pipes/pipes.module';

import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { FullScreenComponent } from './components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FlagsMenuComponent } from './components/flags-menu/flags-menu.component';
import { SideChatComponent } from './components/side-chat/side-chat.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { UserInfoComponent } from './components/user-info/user-info.component';
import { BlankComponent } from './components/blank/blank.component';

// TODO: A retirer, juste pour tester la prod build
import { TopCollapsibleComponent } from './components/top-collapsible/top-collapsible.component';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		BrowserAnimationsModule,

		LayoutModule,

		CollapseModule.forRoot(),
		AccordionModule.forRoot(),
		TooltipModule.forRoot(),
		TabsModule.forRoot(),
		BsDropdownModule.forRoot(),

		MultiselectDropdownModule,

		PerfectScrollbarModule,

		PipesModule
	],

	declarations: [
		NavigationComponent,
		CustomFooterComponent,
		HeaderComponent,
		SettingsComponent,
		FooterComponent,
		SidebarComponent,
		BreadcrumbComponent,
		BackTopComponent,
		FullScreenComponent,
		ApplicationsComponent,
		MessagesComponent,
		UserMenuComponent,
		FlagsMenuComponent,
		SideChatComponent,
		FavoritesComponent,
		UserInfoComponent,
		BlankComponent,
		NotFoundComponent,
		TopCollapsibleComponent, // A Supprimer
		MenuComponent
	],
	providers: [
		AppSettings,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	exports: [
		NavigationComponent,
		CustomFooterComponent,
		HeaderComponent,
		SettingsComponent,
		FooterComponent,
		SidebarComponent,
		BreadcrumbComponent,
		BackTopComponent,
		FullScreenComponent,
		ApplicationsComponent,
		MessagesComponent,
		UserMenuComponent,
		FlagsMenuComponent,
		SideChatComponent,
		FavoritesComponent,
		UserInfoComponent,
		BlankComponent,
		NotFoundComponent,
		TopCollapsibleComponent, // A Supprimer
		MenuComponent
	]
})
export class SharedModule {}
