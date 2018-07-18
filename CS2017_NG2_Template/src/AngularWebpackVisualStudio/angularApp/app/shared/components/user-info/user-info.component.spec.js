import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './user-info.component';
var component;
var fixture;
describe('userInfo component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UserInfoComponent],
            imports: [BrowserModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserInfoComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', async(function () {
        expect(true).toEqual(true);
    }));
    it('should do something', async(function () {
        expect(component).toEqual(component);
    }));
});
//# sourceMappingURL=user-info.component.spec.js.map