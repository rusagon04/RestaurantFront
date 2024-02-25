import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCurrentFormComponent } from './login-current-form.component';

describe('LoginCurrentFormComponent', () => {
  let component: LoginCurrentFormComponent;
  let fixture: ComponentFixture<LoginCurrentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCurrentFormComponent]
    });
    fixture = TestBed.createComponent(LoginCurrentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
