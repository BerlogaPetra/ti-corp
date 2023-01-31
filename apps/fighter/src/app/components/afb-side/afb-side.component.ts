import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FormValueChangesDirective } from '../../directives/form-value-changes.directive';
import { Action } from '../../interfaces/action.interface';
import { AFBSide } from '../../interfaces/afb-form.interface';
import { Roll } from '../../interfaces/roll.interface';
import { Side } from '../../models/side.model';
import { HitsPipe } from '../../pipes/hits.pipe';
import { FormType } from '../../types/form.type';
import { ActionSelectorComponent } from '../action-selector/action-selector.component';
import { AfbAssignComponent } from '../afb-assign/afb-assign.component';
import { AfbDecisionComponent } from '../afb-decision/afb-decision.component';
import { AfbOverviewComponent } from '../afb-overview/afb-overview.component';
import { AfbRollComponent } from '../afb-roll/afb-roll.component';

@Component({
  selector: 'ti-corp-afb-side',
  standalone: true,
  imports: [
    CommonModule,
    ActionSelectorComponent,
    AfbOverviewComponent,
    AfbDecisionComponent,
    AfbAssignComponent,
    AfbRollComponent,
    ReactiveFormsModule,
    FormValueChangesDirective,
    HitsPipe
  ],
  templateUrl: './afb-side.component.html',
  styleUrls: ['./afb-side.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AfbSideComponent,
      multi: true,
    },
  ],
})
export class AfbSideComponent implements ControlValueAccessor {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  @Input() public side!: Side | undefined;

  @Input() public incomingRolls: Roll[] | undefined | null;

  @Input() public actions: Action[] = [];

  public form!: FormType<AFBSide>;

  public isDecisionPerform$: Observable<boolean> | undefined;

  onChange: (_: unknown) => void = () => null;

  writeValue(value: AFBSide): void {
    this.form = this.formBuilder.group(value);

    this.isDecisionPerform$ = this.form.controls.decision.valueChanges.pipe(
      map((value) => value === 'Perform')
    );
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    // Noop
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
