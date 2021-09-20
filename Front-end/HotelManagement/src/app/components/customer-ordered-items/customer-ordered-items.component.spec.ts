import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderedItemsComponent } from './customer-ordered-items.component';

describe('CustomerOrderedItemsComponent', () => {
  let component: CustomerOrderedItemsComponent;
  let fixture: ComponentFixture<CustomerOrderedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
