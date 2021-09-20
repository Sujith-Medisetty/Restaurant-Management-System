import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChefsComponent } from './all-chefs.component';

describe('AllChefsComponent', () => {
  let component: AllChefsComponent;
  let fixture: ComponentFixture<AllChefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
