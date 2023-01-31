import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbDecisionComponent } from './afb-decision.component';

describe('AfbDecisionComponent', () => {
  let component: AfbDecisionComponent;
  let fixture: ComponentFixture<AfbDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbDecisionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
