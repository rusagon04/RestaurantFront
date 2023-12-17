import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMessageDialog } from './confirm-message.dialog';

describe('ConfirmMessageDialog', () => {
  let component: ConfirmMessageDialog;
  let fixture: ComponentFixture<ConfirmMessageDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmMessageDialog]
    });
    fixture = TestBed.createComponent(ConfirmMessageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
