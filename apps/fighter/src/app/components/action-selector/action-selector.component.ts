import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { ActionsType } from '../../enums/actions.enum';
import { Action } from '../../interfaces/action.interface';
import { ToggleCardModule } from '../toggle-card/toggle-card.module';

@Component({
  selector: 'ti-corp-action-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleCardModule,
    FormValueChangesDirective,
  ],
  templateUrl: './action-selector.component.html',
  styleUrls: ['./action-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ActionSelectorComponent,
      multi: true,
    },
  ],
})
export class ActionSelectorComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  @Input() public options: Action[] = [];

  public form!: FormGroup<Record<ActionsType, FormControl<boolean>>>;

  onChange: (_: unknown) => void = () => null;

  public writeValue(value: Record<ActionsType, FormControl<boolean>>): void {
    this.form = this.formBuilder.group(value);
  }

  public registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {
    //
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
