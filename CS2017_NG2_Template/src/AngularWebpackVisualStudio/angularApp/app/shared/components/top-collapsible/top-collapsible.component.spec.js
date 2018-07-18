import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { TopCollapsibleComponent } from './top-collapsible.component';
var component;
var fixture;
describe('top-collapsible component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TopCollapsibleComponent],
            imports: [BrowserModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TopCollapsibleComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', async(function () {
        expect(true).toEqual(true);
    }));
    it('should do something', async(function () {
        expect(component).toEqual(component);
    }));
});
//# sourceMappingURL=top-collapsible.component.spec.js.map