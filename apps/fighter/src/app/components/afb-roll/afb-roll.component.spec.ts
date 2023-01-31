import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbRollComponent } from './afb-roll.component';

describe('AfbRollComponent', () => {
  let component: AfbRollComponent;
  let fixture: ComponentFixture<AfbRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbRollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
