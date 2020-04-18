import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPhoneAuthComponent } from './client-phone-auth.component';

describe('ClientPhoneAuthComponent', () => {
  let component: ClientPhoneAuthComponent;
  let fixture: ComponentFixture<ClientPhoneAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPhoneAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPhoneAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
