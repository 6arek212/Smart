import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalInputErrorComponent } from './normal-input-error.component';

describe('NormalInputErrorComponent', () => {
  let component: NormalInputErrorComponent;
  let fixture: ComponentFixture<NormalInputErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalInputErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
