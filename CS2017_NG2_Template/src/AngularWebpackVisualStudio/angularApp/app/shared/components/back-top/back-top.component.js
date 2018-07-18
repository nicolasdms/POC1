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
import * as jQuery from 'jquery';
import { Component, ViewEncapsulation, ViewChild, HostListener, Input, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var BackTopComponent = (function () {
    function BackTopComponent(platformId) {
        this.platformId = platformId;
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        if (isPlatformBrowser(this.platformId)) {
            jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
            return false;
        }
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        if (isPlatformBrowser(this.platformId)) {
            var el = this._selector.nativeElement;
            window.scrollY > this.position
                ? jQuery(el).fadeIn(this.showSpeed)
                : jQuery(el).fadeOut(this.showSpeed);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BackTopComponent.prototype, "position", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BackTopComponent.prototype, "showSpeed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BackTopComponent.prototype, "moveSpeed", void 0);
    __decorate([
        ViewChild('backTop'),
        __metadata("design:type", ElementRef)
    ], BackTopComponent.prototype, "_selector", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BackTopComponent.prototype, "_onClick", null);
    __decorate([
        HostListener('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackTopComponent.prototype, "_onWindowScroll", null);
    BackTopComponent = __decorate([
        Component({
            selector: 'app-back-top',
            encapsulation: ViewEncapsulation.None,
            styleUrls: ['./back-top.component.scss'],
            template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top transition\" title=\"Back to Top\"></i>\n  "
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Object])
    ], BackTopComponent);
    return BackTopComponent;
}());
export { BackTopComponent };
//# sourceMappingURL=back-top.component.js.map