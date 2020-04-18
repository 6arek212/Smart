import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddRepairComponent } from './client-add-repair.component';

describe('ClientAddRepairComponent', () => {
  let component: ClientAddRepairComponent;
  let fixture: ComponentFixture<ClientAddRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddRepairComponent ]
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
