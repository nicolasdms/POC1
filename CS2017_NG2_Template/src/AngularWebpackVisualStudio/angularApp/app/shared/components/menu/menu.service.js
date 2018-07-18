var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from './menu';
var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.menuItems = MenuItems;
    }
    MenuService.prototype.getMenuItems = function () {
        return this.menuItems;
    };
    MenuService.prototype.setActiveLink = function () {
        var _this = this;
        this.menuItems.forEach(function (m) { return _this.setIsActive(m); });
    };
    MenuService.prototype.setIsActive = function (menu) {
        var _this = this;
        var isActive = false;
        if (menu.routerLink != null && menu.routerLink.length > 0) {
            if (this.router.isActive(menu.routerLink, false)) {
                isActive = true;
            }
        }
        if (menu.children.length > 0) {
            menu.children.forEach(function (m) {
                if (_this.setIsActive(m)) {
                    isActive = true;
                }
            });
        }
        menu.isActive = isActive;
        return isActive;
    };
    MenuService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], MenuService);
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu.service.js.map