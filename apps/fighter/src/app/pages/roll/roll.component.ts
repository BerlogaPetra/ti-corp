import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AfbComponent } from '../../components/afb/afb.component';
import { ACTIONS } from '../../constants/actions.constants';
import { RollForm } from '../../interfaces/roll-form.interface';
import { SideService } from '../../services/side.service';

@Component({
  selector: 'ti-corp-roll',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AfbComponent],
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RollComponent {
  constructor(
    private readonly sideService: SideService,
    private readonly formBuilder: NonNullableFormBuilder
  ) {}

  public readonly isReadyToAFB$ = this.sideService.isReadyToAFB$;

  public readonly attacker$ = this.sideService.attacker$;

  public readonly defender$ = this.sideService.defender$;

  public readonly actions = ACTIONS;

  public readonly form = this.formBuilder.group<RollForm>({
    afb: {
      attacker: { assignedHits: 0, decision: 'None', rolls: [] },
      defender: { assignedHits: 0, decision: "None", rolls: [] },
    },
  });
}
