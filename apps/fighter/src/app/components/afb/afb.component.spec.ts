import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbComponent } from './afb.component';

describe('AfbRollComponent', () => {
  let component: AfbComponent;
  let fixture: ComponentFixture<AfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
