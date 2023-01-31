import { NgModule } from '@angular/core';
import { CardModule } from '../card/card.module';
import { ToggleCardComponent } from './toggle-card.component';

@NgModule({
  imports: [ToggleCardComponent],
  exports: [ToggleCardComponent, CardModule],
})
export class ToggleCardModule {}
