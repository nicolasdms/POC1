var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
var SettingsComponent = (function () {
    function SettingsComponent(platformId, appSettings, router) {
        this.platformId = platformId;
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    SettingsComponent.prototype.chooseMenu = function (menu) {
        this.settings.theme.menu = menu;
    };
    SettingsComponent.prototype.chooseMenuType = function (menuType) {
        this.settings.theme.menuType = menuType;
    };
    SettingsComponent.prototype.changeTheme = function (theme) {
        this.settings.theme.skin = theme;
        if (isPlatformBrowser(this.platformId)) {
            sessionStorage['skin'] = theme;
        }
    };
    SettingsComponent = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Object,
            AppSettings,
            Router])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map