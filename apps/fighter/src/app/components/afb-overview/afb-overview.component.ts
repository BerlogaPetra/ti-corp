import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Fleet } from '../../interfaces/fleet.interface';

@Component({
  selector: 'ti-corp-afb-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afb-overview.component.html',
  styleUrls: ['./afb-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfbOverviewComponent {
  @Input() public faction!: string;

  @Input() public fleet!: Fleet;
}
