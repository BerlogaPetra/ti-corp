import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef
} from '@angular/core';
import { CardBodyDirective } from './card-body.directive';
import { CardTitleDirective } from './card-title.directive';

@Component({
  selector: 'ti-corp-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @ContentChild(CardTitleDirective, { read: TemplateRef })
  public readonly cardTitleTemplateRef:
    | TemplateRef<CardTitleDirective>
    | undefined;

  @ContentChild(CardBodyDirective, { read: TemplateRef })
  public readonly cardBodyTemplateRef:
    | TemplateRef<CardBodyDirective>
    | undefined;
}
