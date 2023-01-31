import { NgModule } from '@angular/core';
import { CardBodyDirective } from './card-body.directive';
import { CardTitleDirective } from './card-title.directive';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CardComponent, CardBodyDirective, CardTitleDirective],
  exports: [CardComponent, CardBodyDirective, CardTitleDirective],
})
export class CardModule {}
