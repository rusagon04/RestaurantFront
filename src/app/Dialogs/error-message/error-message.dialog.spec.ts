import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageDialog } from './error-message.dialog';

describe('ErrorMessageDialog', () => {
  let component: ErrorMessageDialog;
  let fixture: ComponentFixture<ErrorMessageDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageDialog]
    });
    fixture = TestBed.createComponent(ErrorMessageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
