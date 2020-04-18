import { TestBed } from '@angular/core/testing';
import { RepairService } from './repair.service';
describe('RepairService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RepairService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=repair.service.spec.js.map