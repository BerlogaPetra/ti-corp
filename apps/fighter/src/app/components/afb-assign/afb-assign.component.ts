import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Action } from '../../interfaces/action.interface';
import { HitsPipe } from '../../pipes/hits.pipe';
import { ActionSelectorComponent } from '../action-selector/action-selector.component';

@Component({
  selector: 'ti-corp-afb-assign',
  standalone: true,
  imports: [CommonModule, ActionSelectorComponent, HitsPipe],
  templateUrl: './afb-assign.component.html',
  styleUrls: ['./afb-assign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AfbAssignComponent,
    },
  ],
})
export class AfbAssignComponent implements ControlValueAccessor {
  @Input() public actions: Action[] = [];

  @Input() public hits: number | undefined | null;

  #assignedHits = new BehaviorSubject<number | undefined>(undefined);

  #isDisabled = new BehaviorSubject<boolean>(false);

  #onChange: (_: unknown) => void = () => null;

  onAssign() {
    // need to calculate actions and update final hits amount
    // for now we just take approve from the user to assign hits based on rolls
    this.#setAssignedHits(this.hits ?? 0);
  }

  writeValue(value: number): void {
    this.#assignedHits.next(value);
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.#onChange = fn;
  }

  registerOnTouched(): void {
    // Noop
  }

  setDisabledState(isDisabled: boolean): void {
    this.#isDisabled.next(isDisabled);
  }

  #setAssignedHits(value: number): void {
    this.#assignedHits.next(value);
    this.#onChange(value);
  }
}
