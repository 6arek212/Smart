import { TestBed } from '@angular/core/testing';
import { StaticsService } from './statics.service';
describe('StaticsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StaticsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=statics.service.spec.js.map