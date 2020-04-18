import { async, TestBed } from '@angular/core/testing';
import { PhoneAuthComponent } from './phone-auth.component';
describe('PhoneAuthComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhoneAuthComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PhoneAuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=phone-auth.component.spec.js.map