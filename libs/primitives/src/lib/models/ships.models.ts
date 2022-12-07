import { UnitAbilities } from './unit-abilities.model';
import { UnitTemplate } from './unit.model';

const DEFAULT_ABILITIES: UnitAbilities = {
  isCanAFBarrage: false,
  isCanBeTransported: false,
  isCanBombardment: false,
  isCanPlanetaryShield: false,
  isCanSpaceCannon: false,
  isCanSustainDamage: false,
  isCanGroundCombat: false,
  production: 0
} as const;

export const SpaceDock = new UnitTemplate(
  {
    capacity: 3,
    cost: 0,
    damage: 0,
    move: 0,
  },
  DEFAULT_ABILITIES
);

export const Carrier = new UnitTemplate(
  {
    capacity: 4,
    cost: 3,
    damage: 9,
    move: 1,
  },
  DEFAULT_ABILITIES
);

export const Fighter = new UnitTemplate(
  {
    capacity: 0,
    cost: 0.5,
    damage: 9,
    move: 0,
  },
  DEFAULT_ABILITIES
);

export const Infantry = new UnitTemplate(
  {
    capacity: 0,
    cost: 0.5,
    damage: 8,
    move: 0,
  },
  {
    ...DEFAULT_ABILITIES,
    isCanGroundCombat: true
  }
);

export const Destroyer = new UnitTemplate(
  {
    capacity: 0,
    cost: 1,
    damage: 9,
    move: 2,
  },
  DEFAULT_ABILITIES
);
