/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import {
	TestBed,
	async,
	ComponentFixture,
	ComponentFixtureAutoDetect
} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { TopCollapsibleComponent } from './top-collapsible.component';

let component: TopCollapsibleComponent;
let fixture: ComponentFixture<TopCollapsibleComponent>;

describe('top-collapsible component', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [TopCollapsibleComponent],
				imports: [BrowserModule],
				providers: [
					{ provide: ComponentFixtureAutoDetect, useValue: true }
				]
			});
			fixture = TestBed.createComponent(TopCollapsibleComponent);
			component = fixture.componentInstance;
		})
	);

	it(
		'should do something',
		async(() => {
			expect(true).toEqual(true);
		})
	);

	it(
		'should do something',
		async(() => {
			expect(component).toEqual(component);
		})
	);
});
