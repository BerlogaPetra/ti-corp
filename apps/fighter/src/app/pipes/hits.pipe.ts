import { Pipe, PipeTransform } from '@angular/core';
import { Roll } from '../interfaces/roll.interface';
import { convertToHits } from '../utils/hits.utils';

@Pipe({
  name: 'hits',
  standalone: true,
})
export class HitsPipe implements PipeTransform {
  public transform(value: Roll[] | null | undefined): number {
    if (value) {
      return convertToHits(value);
    }

    return 0;
  }
}
