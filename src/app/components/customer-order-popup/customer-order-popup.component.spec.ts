import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderPopupComponent } from './customer-order-popup.component';

describe('CustomerOrderPopupComponent', () => {
  let component: CustomerOrderPopupComponent;
  let fixture: ComponentFixture<CustomerOrderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
