import { TestBed } from '@angular/core/testing';
import { ClientAuthService } from './client-auth.service';
describe('ClientAuthService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ClientAuthService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=client-auth.service.spec.js.map