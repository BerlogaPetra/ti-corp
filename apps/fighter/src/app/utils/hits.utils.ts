import { Roll } from '../interfaces/roll.interface';

export function convertToHits(rolls: Roll[]): number {
  const allHits = rolls.reduce((allHits, roll) => {
    return roll.roll >= roll.rollToHit ? allHits + 1 : allHits;
  }, 0);

  return allHits;
}
