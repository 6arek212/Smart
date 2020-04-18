import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCustomerComponent } from './pick-customer.component';

describe('PickCustomerComponent', () => {
  let component: PickCustomerComponent;
  let fixture: ComponentFixture<PickCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
