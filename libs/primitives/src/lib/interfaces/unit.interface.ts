import { UnitAbilities } from '../models/unit-abilities.model';
import { UnitProperties } from '../models/unit-properties.model';

export interface Unit {
  readonly properties: UnitProperties;
  readonly abilities: UnitAbilities;

  isCanGroundCombat: boolean;
  isCanSpaceCombat: boolean;
}

export interface FactionUnit extends Unit {
  readonly factionName: string;
}
