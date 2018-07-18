var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
var VisitorsComponent = (function () {
    function VisitorsComponent() {
        this.gradient = false;
        this.tooltipDisabled = false;
        this.series = [
            {
                name: 'India',
                data: [
                    3.907,
                    7.943,
                    7.848,
                    9.284,
                    9.263,
                    9.801,
                    3.89,
                    8.238,
                    9.552,
                    6.855
                ]
            },
            {
                name: 'Russian Federation',
                data: [
                    4.743,
                    7.295,
                    7.175,
                    6.376,
                    8.153,
                    8.535,
                    5.247,
                    -7.832,
                    4.3,
                    4.3
                ]
            },
            {
                name: 'Germany',
                data: [
                    0.01,
                    -0.375,
                    1.161,
                    0.684,
                    3.7,
                    3.269,
                    1.083,
                    -5.127,
                    3.69,
                    2.995
                ]
            },
            {
                name: 'World',
                data: [
                    1.988,
                    2.733,
                    3.994,
                    3.464,
                    4.001,
                    3.939,
                    1.333,
                    -2.245,
                    4.339,
                    2.727
                ]
            }
        ];
        this.categories = [
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011
        ];
    }
    VisitorsComponent = __decorate([
        Component({
            selector: 'app-visitors',
            templateUrl: './visitors.component.html',
            styleUrls: ['./visitors.component.scss'],
            encapsulation: ViewEncapsulation.None
        })
    ], VisitorsComponent);
    return VisitorsComponent;
}());
export { VisitorsComponent };
//# sourceMappingURL=visitors.component.js.map