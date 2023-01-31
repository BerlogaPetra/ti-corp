import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CardModule } from '../card/card.module';

@Component({
  selector: 'ti-corp-toggle-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './toggle-card.component.html',
  styleUrls: ['./toggle-card.component.scss', '../card/card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ToggleCardComponent,
    },
  ],
})
export class ToggleCardComponent
  extends CardComponent
  implements ControlValueAccessor
{
  readonly #isSelected = new BehaviorSubject<boolean>(false);

  readonly #isDisabled = new BehaviorSubject<boolean>(false);

  public readonly isSelected$ = this.#isSelected.asObservable();

  public readonly isDisabled$ = this.#isDisabled.asObservable();

  #onChange: (_: unknown) => void = () => null;

  public onToggle() {
    if (!this.#isDisabled.value) {
      this.#setSelected(!this.#isSelected.value);
    }
  }

  writeValue(value: boolean): void {
    this.#isSelected.next(value);
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

  #setSelected(value: boolean): void {
    this.#isSelected.next(value);

    this.#onChange(value);
  }
}
