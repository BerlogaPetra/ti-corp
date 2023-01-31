import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Roll } from '../../interfaces/roll.interface';
import { Side } from '../../models/side.model';
import { HitsPipe } from '../../pipes/hits.pipe';
import { RollCompositionPipe } from '../../pipes/roll-composition.pipe';
import { RollPipe } from '../../pipes/rolls.pipe';
import { FleetUtilsService } from '../../services/fleet-utils.service';

@Component({
  selector: 'ti-corp-afb-roll',
  standalone: true,
  imports: [CommonModule, HitsPipe, RollPipe, RollCompositionPipe],
  templateUrl: './afb-roll.component.html',
  styleUrls: ['./afb-roll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AfbRollComponent,
      multi: true,
    },
  ],
})
export class AfbRollComponent implements ControlValueAccessor {
  constructor(private readonly fleetUtilsService: FleetUtilsService) {}

  @Input() public side!: Side;

  #isDisabled = new BehaviorSubject<boolean>(false);

  #rolls = new BehaviorSubject<Roll[]>([]);

  public readonly rolls$ = this.#rolls.asObservable();

  public readonly isDisabled$ = this.#isDisabled.asObservable();

  public isRolled = false;

  public onRoll() {
    const rolls = this.fleetUtilsService.rollAFB(this.side);

    this.#setRolls(rolls);

    this.isRolled = true;
  }

  #onChange: (_: unknown) => void = () => null;

  writeValue(value: Roll[]): void {
    this.#setRolls(value);
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

  #setRolls(value: Roll[]) {
    this.#rolls.next(value);

    this.#onChange(value);
  }
}
