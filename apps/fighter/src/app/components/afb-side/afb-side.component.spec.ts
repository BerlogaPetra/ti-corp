import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbSideComponent } from './afb-side.component';

describe('AfbActionSelectorComponent', () => {
  let component: AfbSideComponent;
  let fixture: ComponentFixture<AfbSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfbSideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfbSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
