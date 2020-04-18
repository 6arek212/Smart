import { TestBed } from '@angular/core/testing';
import { PhoneAuthService } from './phone-auth.service';
describe('PhoneAuthService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PhoneAuthService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=phone-auth.service.spec.js.map