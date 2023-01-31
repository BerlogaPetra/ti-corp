import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { AfbDecisionsType } from '../../enums/afb-decision.enum';

@Component({
  selector: 'ti-corp-afb-decision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afb-decision.component.html',
  styleUrls: ['./afb-decision.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AfbDecisionComponent,
    },
  ],
})
export class AfbDecisionComponent implements ControlValueAccessor {
  readonly #actionType = new BehaviorSubject<AfbDecisionsType>('None');

  readonly #isDisabled = new BehaviorSubject<boolean>(false);

  public readonly actionType$ = this.#actionType.asObservable();

  public readonly isNoneType$ = this.actionType$.pipe(
    map((actionType) => actionType === 'None')
  );

  #onChange: (_: unknown) => void = () => null;

  public writeValue(value: AfbDecisionsType): void {
    this.#actionType.next(value);
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

  public onSkip(): void {
    this.#setActionType('Skip');
  }

  public onPerform(): void {
    this.#setActionType('Perform');
  }

  #setActionType(actionType: AfbDecisionsType) {
    this.#actionType.next(actionType);
    this.#onChange(actionType);
  }
}
