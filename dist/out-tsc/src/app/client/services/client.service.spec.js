import { TestBed } from '@angular/core/testing';
import { ClientService } from './client.service';
describe('ClientService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ClientService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=client.service.spec.js.map