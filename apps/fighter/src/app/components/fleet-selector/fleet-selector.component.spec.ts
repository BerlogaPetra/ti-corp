import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetSelectorComponent } from './fleet-selector.component';

describe('FleetSelectorComponent', () => {
  let component: FleetSelectorComponent;
  let fixture: ComponentFixture<FleetSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
