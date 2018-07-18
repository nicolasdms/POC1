var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
var FlagsMenuComponent = (function () {
    function FlagsMenuComponent() {
        this.listItems = [
            { text: 'Français', value: 'fr' },
            { text: 'Anglais', value: 'gb' },
            { text: 'Alemand', value: 'de' }
        ];
        this.selectedItem = this.listItems[0];
    }
    FlagsMenuComponent.prototype.ngOnInit = function () { };
    FlagsMenuComponent = __decorate([
        Component({
            selector: 'app-flags-menu',
            templateUrl: './flags-menu.component.html',
            styleUrls: ['./flags-menu.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());
export { FlagsMenuComponent };
//# sourceMappingURL=flags-menu.component.js.map