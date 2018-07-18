import { of } from 'rxjs/observable/of';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
export var routes = [
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
    { path: 'user-info', component: UserInfoComponent, outlet: 'top' },
    { path: '**', redirectTo: '404' }
];
var AppCustomPreloader = (function () {
    function AppCustomPreloader() {
    }
    AppCustomPreloader.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : of(null);
    };
    return AppCustomPreloader;
}());
export { AppCustomPreloader };
export var AppRoutes = RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: AppCustomPreloader,
    initialNavigation: 'enabled'
});
//# sourceMappingURL=app.routes.js.map