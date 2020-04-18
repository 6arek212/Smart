import { async, TestBed } from '@angular/core/testing';
import { ClientAddRepairComponent } from './client-add-repair.component';
describe('ClientAddRepairComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientAddRepairComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ClientAddRepairComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-add-repair.component.spec.js.map