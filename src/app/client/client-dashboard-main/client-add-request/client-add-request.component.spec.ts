import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddRequestComponent } from './client-add-request.component';

describe('ClientAddRequestComponent', () => {
  let component: ClientAddRequestComponent;
  let fixture: ComponentFixture<ClientAddRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
