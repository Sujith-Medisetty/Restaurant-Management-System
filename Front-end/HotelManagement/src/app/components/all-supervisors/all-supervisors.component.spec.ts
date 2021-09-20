import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSupervisorsComponent } from './all-supervisors.component';

describe('AllSupervisorsComponent', () => {
  let component: AllSupervisorsComponent;
  let fixture: ComponentFixture<AllSupervisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSupervisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
