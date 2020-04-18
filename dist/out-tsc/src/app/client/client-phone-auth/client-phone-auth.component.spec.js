import { async, TestBed } from '@angular/core/testing';
import { ClientPhoneAuthComponent } from './client-phone-auth.component';
describe('ClientPhoneAuthComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientPhoneAuthComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ClientPhoneAuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-phone-auth.component.spec.js.map