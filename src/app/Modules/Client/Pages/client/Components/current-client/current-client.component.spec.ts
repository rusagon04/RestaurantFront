import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentClientComponent } from './current-client.component';

describe('CurrentClientComponent', () => {
  let component: CurrentClientComponent;
  let fixture: ComponentFixture<CurrentClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentClientComponent]
    });
    fixture = TestBed.createComponent(CurrentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
