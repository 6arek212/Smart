import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesManageComponent } from './devices-manage.component';

describe('DevicesManageComponent', () => {
  let component: DevicesManageComponent;
  let fixture: ComponentFixture<DevicesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
