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
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppSettings } from '../../../app.settings';
import { MenuService } from '../menu/menu.service';
var HeaderComponent = (function () {
    function HeaderComponent(platformId, appSettings, menuService) {
        this.platformId = platformId;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.showHorizontalMenu = true;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getMenuItems();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (isPlatformBrowser(this.platformId) && window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
    };
    HeaderComponent.prototype.onWindowResize = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (window.innerWidth <= 768) {
                this.showHorizontalMenu = false;
            }
            else {
                this.showHorizontalMenu = true;
            }
        }
    };
    __decorate([
        HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowResize", null);
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            encapsulation: ViewEncapsulation.None,
            providers: [MenuService],
            animations: [
                trigger('showInfo', [
                    state('1', style({ transform: 'rotate(180deg)' })),
                    state('0', style({ transform: 'rotate(0deg)' })),
                    transition('1 => 0', animate('400ms')),
                    transition('0 => 1', animate('400ms'))
                ])
            ]
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Object,
            AppSettings,
            MenuService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map