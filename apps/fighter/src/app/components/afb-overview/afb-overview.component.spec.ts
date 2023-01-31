import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbOverviewComponent } from './afb-overview.component';

describe('AfbOverviewComponent', () => {
  let component: AfbOverviewComponent;
  let fixture: ComponentFixture<AfbOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
