import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetCounterComponent } from './fleet-counter.component';

describe('FleetCounterComponent', () => {
  let component: FleetCounterComponent;
  let fixture: ComponentFixture<FleetCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleetCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
