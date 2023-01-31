import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { Fleet } from '../../interfaces/fleet.interface';
import { FleetCounterComponent } from '../fleet-counter/fleet-counter.component';

@Component({
  selector: 'ti-corp-fleet-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FleetCounterComponent,
    FormValueChangesDirective,
  ],
  templateUrl: './fleet-selector.component.html',
  styleUrls: ['./fleet-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FleetSelectorComponent,
      multi: true,
    },
  ],
})
export class FleetSelectorComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  public form!: FormGroup<{
    [Key in keyof Fleet]: FormControl<Fleet[Key]>;
  }>;

  onChange: (_: unknown) => void = () => null;

  public writeValue(value: Fleet): void {
    this.form = this.formBuilder.group(value);
  }

  public registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {
    // Noop
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
