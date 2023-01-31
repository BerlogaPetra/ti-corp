import { Injectable } from '@angular/core';
import { DiceOptions, DicePouch } from 'dice-pouch';
import { Roll } from '../interfaces/roll.interface';
import { Side } from '../models/side.model';

@Injectable({ providedIn: 'root' })
export class FleetUtilsService {
  public checkIsAbleToAFB(side: Side): boolean {
    return [
      side.fleet.destroyers > 0,
      side.faction === 'Sar' && side.fleet.flagship > 0,
    ].some(Boolean);
  }

  public rollAFB(side: Side): Roll[] {
    const totalHits: Roll[] = [];

    if (side.fleet.destroyers > 0) {
      for (let index = 0; index < side.fleet.destroyers; index++) {
        if (side.technologies.Destroyer2) {
          totalHits.push(...this.#mapRolls({ count: 3, type: 10 }, 6));
        } else {
          totalHits.push(...this.#mapRolls({ count: 2, type: 10 }, 9));
        }
      }
    }

    if (side.faction === 'Sar' && side.fleet.flagship > 0) {
      totalHits.push(...this.#mapRolls({ count: 4, type: 10 }, 6));
    }

    return totalHits;
  }

  #mapRolls(options: DiceOptions, rollToHit: number): Roll[] {
    const sequenceRoll = DicePouch.sequenceRoll(options);

    return sequenceRoll.map((roll) => ({ roll, rollToHit }));
  }
}
