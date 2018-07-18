import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
	RouterModule,
	Route,
	Routes,
	PreloadingStrategy
} from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';

export const routes: Routes = [
	// { path: '', redirectTo: 'home', pathMatch: 'full' },
	// {
	//     path: 'about', loadChildren: './about/about.module#AboutModule',
	// }
	{ path: '', redirectTo: '/dashboard(top:user-info)', pathMatch: 'full' },
	{
		path: 'dashboard',
		loadChildren: './dashboard/dashboard.module#DashboardModule',
		data: { breadcrumb: 'Dashboard', preload: true }
	},
	{
		path: 'ui',
		loadChildren: './ui/ui.module#UiModule',
		data: { breadcrumb: 'UI' }
	},
	{ path: '404', component: NotFoundComponent, data: { breadcrumb: '404' } },
	// { path: 'membership', loadChildren: './membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' } },
	// tslint:disable-next-line:max-line-length
	// { path: 'form-elements', loadChildren: './form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
	// { path: 'tables', loadChildren: './tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
	// { path: 'tools', loadChildren: './tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
	// { path: 'calendar', loadChildren: './calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
	// { path: 'mailbox', loadChildren: './mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
	// { path: 'maps', loadChildren: './maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
	// { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
	// tslint:disable-next-line:max-line-length
	// { path: 'dynamic-menu', loadChildren: './dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },
	// { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
	// { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
	{ path: 'user-info', component: UserInfoComponent, outlet: 'top' },
	{ path: '**', redirectTo: '404' }
];

export class AppCustomPreloader implements PreloadingStrategy {
	preload(route: Route, load: Function): Observable<any> {
		return route.data && route.data.preload ? load() : of(null);
	}
}

export const AppRoutes = RouterModule.forRoot(routes, {
	// Router options
	useHash: false,
	preloadingStrategy: AppCustomPreloader,
	initialNavigation: 'enabled'
});
