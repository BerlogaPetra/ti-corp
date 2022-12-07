import { FactionUnit } from '../interfaces/unit.interface';
import { UnitAbilities } from './unit-abilities.model';
import { UnitProperties } from './unit-properties.model';
import { UnitTemplate } from './unit.model';

export class FactionUnitTemplate extends UnitTemplate implements FactionUnit {
  constructor(
    public readonly factionName: string,
    properties: UnitProperties,
    abilities: UnitAbilities
  ) {
    super(properties, abilities);
  }


}
