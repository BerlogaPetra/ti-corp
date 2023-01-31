import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ti-corp-fleet-counter',
  templateUrl: './fleet-counter.component.html',
  styleUrls: ['./fleet-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FleetCounterComponent,
      multi: true,
    },
  ],
})
export class FleetCounterComponent implements ControlValueAccessor {
  @Input() public title: string | undefined;

  readonly #amount = new BehaviorSubject<number>(0);

  readonly #isDisabled = new BehaviorSubject<boolean>(false);

  public readonly amount$ = this.#amount.asObservable();

  public readonly isDisabled$ = this.#isDisabled.asObservable();

  #onChange: (_: unknown) => void = () => null;

  public writeValue(value: number): void {
    this.#amount.next(value);
  }

  public registerOnChange(fn: (_: unknown) => void): void {
    this.#onChange = fn;
  }

  public registerOnTouched(): void {
    // Noop
  }

  public setDisabledState(isDisabled: boolean): void {
    this.#isDisabled.next(isDisabled);
  }

  public increase(): void {
    this.#setAmount(this.#amount.value + 1);
  }

  public decrease(): void {
    if (this.#amount.value - 1 < 0) {
      return;
    }

    this.#setAmount(this.#amount.value - 1);
  }

  public reset(): void {
    this.#setAmount(0);
  }

  upgrade() {
    // throw new Error('Method not implemented.');
  }

  #setAmount(value: number) {
    this.#amount.next(value);
    this.#onChange(value);
  }
}
