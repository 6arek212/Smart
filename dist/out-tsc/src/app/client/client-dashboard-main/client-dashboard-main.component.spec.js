import { async, TestBed } from '@angular/core/testing';
import { ClientDashboardMainComponent } from './client-dashboard-main.component';
describe('ClientDashboardMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientDashboardMainComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ClientDashboardMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-dashboard-main.component.spec.js.map