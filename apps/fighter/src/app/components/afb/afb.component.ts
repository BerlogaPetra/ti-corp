import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { Action } from '../../interfaces/action.interface';
import { AFBForm, AFBSide } from '../../interfaces/afb-form.interface';
import { Roll } from '../../interfaces/roll.interface';
import { Side } from '../../models/side.model';
import { FormType } from '../../types/form.type';
import { AfbSideComponent } from '../afb-side/afb-side.component';

@Component({
  selector: 'ti-corp-afb',
  standalone: true,
  imports: [
    CommonModule,
    AfbSideComponent,
    ReactiveFormsModule,
    FormValueChangesDirective,
  ],
  templateUrl: './afb.component.html',
  styleUrls: ['./afb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: AfbComponent },
  ],
})
export class AfbComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  @Input() public attacker: Side | null | undefined;

  @Input() public defender: Side | null | undefined;

  @Input() public actions: Action[] = [];

  public form!: FormType<AFBForm>;

  public defenderRolls$: Observable<Roll[]> | undefined;

  public attackerRolls$: Observable<Roll[]> | undefined;

  onChange: (_: unknown) => void = () => null;

  writeValue(value: AFBForm): void {
    this.form = this.formBuilder.group(value);
    this.defenderRolls$ = this.pluckRolls(this.form.controls.defender);
    this.attackerRolls$ = this.pluckRolls(this.form.controls.attacker);
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    // Noop
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  pluckRolls(side: FormControl<AFBSide>): Observable<Roll[]> {
    return side.valueChanges.pipe(map((value) => value.rolls));
  }
}
