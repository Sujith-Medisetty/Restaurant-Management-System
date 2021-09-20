import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAllItemsComponent } from './customer-all-items.component';

describe('CustomerAllItemsComponent', () => {
  let component: CustomerAllItemsComponent;
  let fixture: ComponentFixture<CustomerAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
