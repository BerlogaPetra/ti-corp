import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { first, map, tap } from 'rxjs';
import { SideSelectorComponent } from '../../components/side-selector/side-selector.component';
import { ACTIONS } from '../../constants/actions.constants';
import { TECHNOLOGIES } from '../../constants/technologies.constants';
import { Factions } from '../../enums/factions.enum';
import { Side } from '../../models/side.model';
import { SideFormService } from '../../services/side-form.service';
import { SideService } from '../../services/side.service';
import { FormType } from '../../types/form.type';

@Component({
  selector: 'ti-corp-setup',
  standalone: true,
  imports: [CommonModule, SideSelectorComponent, ReactiveFormsModule],
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SideFormService],
})
export class SetupComponent {
  constructor(
    private readonly sideService: SideService,
    private readonly sideFormService: SideFormService
  ) {}

  @Output() public readonly ready = new EventEmitter<void>();

  public readonly factions = Object.values(Factions);

  public readonly technologies = TECHNOLOGIES;

  public readonly actions = ACTIONS;

  #attackerForm!: FormType<Side>;

  #defenderForm!: FormType<Side>;

  public readonly attackerForm$ = this.sideService.attacker$.pipe(
    first(),
    map((attacker) => this.#createForm(attacker)),
    tap((form) => {
      this.#attackerForm = form;
    })
  );

  public readonly defenderForm$ = this.sideService.defender$.pipe(
    first(),
    map((defender) => this.#createForm(defender)),
    tap((form) => {
      this.#defenderForm = form;
    })
  );

  public readonly isReadyToRoll$ = this.sideService.isReadyToRoll$;

  public onAttackerReady(): void {
    this.sideService.setAttacker(this.#attackerForm.value as Side);
  }

  public onAttackerUnready(): void {
    this.sideService.setAttacker(undefined);
  }

  public onDefenderReady(): void {
    this.sideService.setDefender(this.#defenderForm.value as Side);
  }

  public onDefenderUnready(): void {
    this.sideService.setDefender(undefined);
  }

  public onReady(): void {
    this.ready.next();
  }

  #createForm(initialValue?: Side): FormType<Side> {
    const form = this.sideFormService.create(this.technologies, this.actions);

    console.log('Computed');

    if (initialValue) {
      form.setValue(initialValue);
      form.disable();
    }

    return form;
  }
}
