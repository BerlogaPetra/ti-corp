import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { TechnologiesType } from '../../enums/technologies.enum';
import { Technology } from '../../interfaces/technology.interface';
import { ToggleCardModule } from '../toggle-card/toggle-card.module';

@Component({
  selector: 'ti-corp-technology-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleCardModule,
    FormValueChangesDirective,
  ],
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TechnologySelectorComponent,
      multi: true,
    },
  ],
})
export class TechnologySelectorComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  @Input() public options: Technology[] = [];

  public form!: FormGroup<Record<TechnologiesType, FormControl<boolean>>>;

  onChange: (_: unknown) => void = () => null;

  public writeValue(
    value: Record<TechnologiesType, FormControl<boolean>>
  ): void {
    this.form = this.formBuilder.group(value);
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    // Noop
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
