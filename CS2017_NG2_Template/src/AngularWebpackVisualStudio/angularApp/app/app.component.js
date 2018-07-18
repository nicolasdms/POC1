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
import { Component, ViewEncapsulation, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
var AppComponent = (function () {
    function AppComponent(platformId, appSettings, router) {
        this.platformId = platformId;
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.ESCAPE_KEYCODE = 27;
        this.settings = this.appSettings.settings;
        if (isPlatformBrowser(this.platformId) && sessionStorage['skin']) {
            this.settings.theme.skin = sessionStorage['skin'];
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        if (isPlatformBrowser(this.platformId) && window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var d = document.getElementById('preloader');
            d.classList.add('hide');
            setTimeout(function () {
                d.remove();
                console.log('d.remove()');
            }, 500);
        }, 200);
    };
    AppComponent.prototype.onWindowResize = function () {
        var showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    };
    AppComponent.prototype.showMenuStateChange = function (showMenu) {
        this.settings.theme.showMenu = showMenu;
    };
    AppComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === this.ESCAPE_KEYCODE) {
            if (window.innerWidth <= 768 && this.settings.theme.showMenu) {
                this.settings.theme.showMenu = false;
            }
            else if (this.settings.theme.showTopCollapsibleContent) {
                this.settings.theme.showTopCollapsibleContent = false;
            }
            else if (this.settings.theme.showSetting) {
                this.settings.theme.showSetting = false;
            }
        }
    };
    AppComponent.prototype._showMenu = function () {
        return isPlatformBrowser(this.platformId)
            ? window.innerWidth <= 768
            : true;
    };
    __decorate([
        HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowResize", null);
    __decorate([
        HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onKeydownHandler", null);
    AppComponent = __decorate([
        Component({
            selector: 'app-component',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Object,
            AppSettings,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map