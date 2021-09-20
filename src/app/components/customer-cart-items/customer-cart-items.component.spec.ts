import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartItemsComponent } from './customer-cart-items.component';

describe('CustomerCartItemsComponent', () => {
  let component: CustomerCartItemsComponent;
  let fixture: ComponentFixture<CustomerCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
