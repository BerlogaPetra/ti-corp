import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from './pages/container/container.component';

@Component({
  standalone: true,
  imports: [ContainerComponent],
  selector: 'ti-corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
