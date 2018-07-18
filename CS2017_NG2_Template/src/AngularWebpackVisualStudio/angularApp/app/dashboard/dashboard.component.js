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
import { AppSettings } from '../app.settings';
var introJs = require('intro.js');
var DashboardComponent = (function () {
    function DashboardComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    DashboardComponent.prototype.startTour = function () {
        var _this = this;
        var intro;
        var showMenu;
        intro = introJs();
        intro.setOptions({
            skipLabel: 'Arr&ecirc;ter',
            nextLabel: ' Suivant &rarr; ',
            prevLabel: ' &larr; Pr&eacute;c&eacute;dent ',
            doneLabel: ' Ok &#10003; ',
            exitOnEsc: true,
            disableInteraction: true
        });
        var steps = [
            {
                intro: 'Salut a toi !',
                position: 'left'
            },
            {
                element: document.querySelectorAll('.favorites-container')[0],
                intro: 'On ajoute des favs etc...',
                position: 'auto'
            },
            {
                element: '#supertest',
                intro: "On highlight un texte qui sert a rien, mais c'est OK !",
                position: 'auto'
            },
            {
                element: document.getElementById('sidebar'),
                intro: 'Ce tooltip num&eacute;rot&eacute; est incroyable du cul !',
                position: 'auto',
                onbeforechange: function () {
                    showMenu = _this.settings.theme.showMenu;
                    if (!showMenu) {
                        _this.settings.theme.showMenu = true;
                        console.log('onbeforechange : On affiche le menu');
                    }
                    setTimeout(function () {
                        if (!showMenu) {
                            intro.refresh();
                        }
                    }, 20);
                }
            }
        ];
        intro.setOptions({
            steps: steps
        });
        function applyChangeEvent(name) {
            var currentStep = steps[intro._currentStep];
            if (currentStep && currentStep[name]) {
                console.log(name, intro._currentStep);
                currentStep[name]();
            }
        }
        intro.onchange(function () {
            applyChangeEvent('onchange');
        });
        intro.onbeforechange(function () {
            applyChangeEvent('onbeforechange');
        });
        intro.onafterchange(function () {
            applyChangeEvent('onafterchange');
        });
        intro.onbeforeexit(function () {
            if (showMenu === false) {
                console.log('onbeforeexit : On cache le menu');
                _this.settings.theme.showMenu = false;
            }
        });
        intro.start();
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [AppSettings])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map