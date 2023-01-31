import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Screens, ScreensType } from '../../enums/screens.enum';
import { ScreenTypeService } from '../../services/screen.service';
import { AssignComponent } from '../assign/assign.component';
import { RollComponent } from '../roll/roll.component';
import { SetupComponent } from '../setup/setup.component';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  selector: 'ti-corp-container',
  imports: [CommonModule, SetupComponent, AssignComponent, RollComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  constructor(private readonly screenTypeService: ScreenTypeService) {}

  public readonly screenTypes = Screens;

  public readonly screenType$ = this.screenTypeService.screen$;

  public onScreenChange(screen: ScreensType): void {
    this.screenTypeService.setScreen(screen);
  }
}
