var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
var InfoCardsComponent = (function () {
    function InfoCardsComponent() {
        this.seriesData = [20, 40, 45, 30, 50];
        this.categories = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
    }
    InfoCardsComponent = __decorate([
        Component({
            selector: 'app-info-cards',
            templateUrl: './info-cards.component.html',
            encapsulation: ViewEncapsulation.None
        })
    ], InfoCardsComponent);
    return InfoCardsComponent;
}());
export { InfoCardsComponent };
//# sourceMappingURL=info-cards.component.js.map