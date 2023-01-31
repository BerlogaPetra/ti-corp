import { Pipe, PipeTransform } from '@angular/core';
import { Roll } from '../interfaces/roll.interface';

@Pipe({
  name: 'roll',
  standalone: true,
})
export class RollPipe implements PipeTransform {
  transform(value: Roll | null): string {
    if (value) {
      return `Roll: ${value.roll} - Roll To Hit: ${value.rollToHit}`;
    }

    return '';
  }
}
