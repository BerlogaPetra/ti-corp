import { Pipe, PipeTransform } from '@angular/core';
import { Roll } from '../interfaces/roll.interface';

@Pipe({
  name: 'rollComposition',
  standalone: true,
})
export class RollCompositionPipe implements PipeTransform {
  transform(value: Roll[] | null | undefined): string {
    if (value) {
      return this.#transformToComposition(value);
    }

    return '';
  }

  #transformToComposition(value: Roll[]) {
    const groupByDiceTypes = value.reduce((baseDiceType, roll) => {
      const dicesRolled = baseDiceType[roll.rollToHit] ?? 0;

      return { ...baseDiceType, [roll.rollToHit]: dicesRolled + 1 };
    }, {} as Record<string, number>);
    const diceComposition = Object.entries(groupByDiceTypes).map((entry) => {
      const [diceType, amountOfDices] = entry;

      return `${diceType}x${amountOfDices}`;
    });

    return diceComposition.join(' & ');
  }
}
