import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupervisorComponent } from './add-supervisor.component';

describe('AddSupervisorComponent', () => {
  let component: AddSupervisorComponent;
  let fixture: ComponentFixture<AddSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
