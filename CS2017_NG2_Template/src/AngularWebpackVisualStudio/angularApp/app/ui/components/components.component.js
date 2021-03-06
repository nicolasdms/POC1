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
var ComponentsComponent = (function () {
    function ComponentsComponent(platformId) {
        this.platformId = platformId;
    }
    ComponentsComponent.prototype.ngOnInit = function () {
        if (isPlatformBrowser(this.platformId)) {
        }
    };
    ComponentsComponent = __decorate([
        Component({
            selector: 'app-components',
            templateUrl: './components.component.html',
            styleUrls: ['./components.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Object])
    ], ComponentsComponent);
    return ComponentsComponent;
}());
export { ComponentsComponent };
//# sourceMappingURL=components.component.js.map