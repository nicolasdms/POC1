import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';

var introJs = require('intro.js')

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
	public settings: Settings;
	constructor(public appSettings: AppSettings) {
		this.settings = this.appSettings.settings;
	}

	startTour() {
		let intro: any;
		let showMenu: boolean;

		intro = introJs();
		intro.setOptions({
			skipLabel: 'Arr&ecirc;ter',
			nextLabel: ' Suivant &rarr; ',
			prevLabel: ' &larr; Pr&eacute;c&eacute;dent ',
			doneLabel: ' Ok &#10003; ',
			exitOnEsc: true,
			disableInteraction: true
		});

		const steps = [
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
				intro:
					'Ce tooltip num&eacute;rot&eacute; est incroyable du cul !',
				position: 'auto',
				onbeforechange: () => {
					showMenu = this.settings.theme.showMenu;
					if (!showMenu) {
						this.settings.theme.showMenu = true;
						console.log('onbeforechange : On affiche le menu');
					}
					setTimeout(() => {
						if (!showMenu) {
							intro.refresh();
						}
					}, 20);
				}
			}
		];

		// Initialize steps
		intro.setOptions({
			steps: steps
		});

		function applyChangeEvent(name: string) {
			const currentStep: any = steps[intro._currentStep];
			if (currentStep && currentStep[name]) {
				console.log(name, intro._currentStep);
				currentStep[name]();
			}
		}

		intro.onchange(() => {
			applyChangeEvent('onchange');
		});
		intro.onbeforechange(() => {
			applyChangeEvent('onbeforechange');
		});
		intro.onafterchange(() => {
			applyChangeEvent('onafterchange');
		});

		intro.onbeforeexit(() => {
			if (showMenu === false) {
				console.log('onbeforeexit : On cache le menu');
				this.settings.theme.showMenu = false;
			}
		});

		// Start tutorial
		intro.start();
	}
}
