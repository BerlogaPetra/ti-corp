import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbAssignComponent } from './afb-assign.component';

describe('AfbAssignComponent', () => {
  let component: AfbAssignComponent;
  let fixture: ComponentFixture<AfbAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbAssignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
