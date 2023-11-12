import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbackComponent } from './scrollback.component';

describe('ScrollbackComponent', () => {
  let component: ScrollbackComponent;
  let fixture: ComponentFixture<ScrollbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollbackComponent]
    });
    fixture = TestBed.createComponent(ScrollbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
