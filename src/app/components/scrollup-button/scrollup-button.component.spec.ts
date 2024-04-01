import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollupButtonComponent } from './scrollup-button.component';

describe('ScrollupButtonComponent', () => {
  let component: ScrollupButtonComponent;
  let fixture: ComponentFixture<ScrollupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
