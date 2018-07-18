/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import {
	TestBed,
	async,
	ComponentFixture,
	ComponentFixtureAutoDetect
} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './user-info.component';

let component: UserInfoComponent;
let fixture: ComponentFixture<UserInfoComponent>;

describe('userInfo component', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [UserInfoComponent],
				imports: [BrowserModule],
				providers: [
					{ provide: ComponentFixtureAutoDetect, useValue: true }
				]
			});
			fixture = TestBed.createComponent(UserInfoComponent);
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
