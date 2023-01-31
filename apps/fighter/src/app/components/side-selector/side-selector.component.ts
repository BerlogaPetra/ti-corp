import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FactionsType } from '../../enums/factions.enum';
import { Action } from '../../interfaces/action.interface';
import { Technology } from '../../interfaces/technology.interface';
import { Side } from '../../models/side.model';
import { FormType } from '../../types/form.type';
import { ActionSelectorComponent } from '../action-selector/action-selector.component';
import { FactionSelectorComponent } from '../faction-selector/faction-selector.component';
import { FleetSelectorComponent } from '../fleet-selector/fleet-selector.component';
import { TechnologySelectorComponent } from '../technology-selector/technology-selector.component';

@Component({
  selector: 'ti-corp-side-selector',
  standalone: true,
  imports: [
    CommonModule,
    FactionSelectorComponent,
    FleetSelectorComponent,
    TechnologySelectorComponent,
    ActionSelectorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './side-selector.component.html',
  styleUrls: ['./side-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideSelectorComponent {
  @Input() public form: FormType<Side> | null | undefined;

  @Input() public factions: FactionsType[] = [];

  @Input() public technologies: Technology[] = [];

  @Input() public actions: Action[] = [];

  @Output() public readonly ready = new EventEmitter<void>();

  @Output() public readonly unready = new EventEmitter<void>();

  public get isReady(): boolean | undefined {
    return this.form?.disabled;
  }

  public onReady(): void {
    this.ready.next();

    this.#ready();
  }

  public onUnready(): void {
    this.unready.next();

    this.#unready();
  }

  #ready(): void {
    this.form?.disable();
  }

  #unready(): void {
    this.form?.enable();
  }
}
