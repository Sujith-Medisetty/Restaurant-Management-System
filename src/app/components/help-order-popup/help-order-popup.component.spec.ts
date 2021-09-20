import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOrderPopupComponent } from './help-order-popup.component';

describe('HelpOrderPopupComponent', () => {
  let component: HelpOrderPopupComponent;
  let fixture: ComponentFixture<HelpOrderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpOrderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
