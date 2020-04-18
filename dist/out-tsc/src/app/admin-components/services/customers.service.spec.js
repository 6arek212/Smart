import { TestBed } from '@angular/core/testing';
import { CustomersService } from './customers.service';
describe('CustomersService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CustomersService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customers.service.spec.js.map