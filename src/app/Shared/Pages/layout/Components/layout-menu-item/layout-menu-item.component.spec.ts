import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuItemComponent } from './layout-menu-item.component';

describe('LayoutMenuItemComponent', () => {
  let component: LayoutMenuItemComponent;
  let fixture: ComponentFixture<LayoutMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMenuItemComponent]
    });
    fixture = TestBed.createComponent(LayoutMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
