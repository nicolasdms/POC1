import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-cost',
	templateUrl: './cost.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CostComponent {
	public seriesData: Observable<number[]>;

	constructor() {
		/* Produce 1 random value each 100ms
           and emit it in batches of 10. */
		this.seriesData = Observable.interval(500)
			.map(() => Math.random())
			.bufferCount(10);
	}
}
