import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { Factions, FactionsType } from '../../enums/factions.enum';

@Component({
  selector: 'ti-corp-faction-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormValueChangesDirective],
  templateUrl: './faction-selector.component.html',
  styleUrls: ['./faction-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FactionSelectorComponent,
      multi: true,
    },
  ],
})
export class FactionSelectorComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  @Input() public options: FactionsType[] = [];

  public readonly control = this.formBuilder.control<FactionsType>(
    Factions.Empty
  );

  onChange: (_: unknown) => void = () => null;

  public writeValue(value: FactionsType): void {
    this.control.setValue(value);
  }

  public registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {
    // Noop
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
