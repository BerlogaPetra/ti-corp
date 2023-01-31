import { DUnitAbilities } from './unit-abilities.model';
import { DUnitTemplate } from './unit.model';

const DEFAULT_ABILITIES: DUnitAbilities = {
  isCanAFBarrage: false,
  isCanBeTransported: false,
  isCanBombardment: false,
  isCanPlanetaryShield: false,
  isCanSpaceCannon: false,
  isCanSustainDamage: false,
  isCanGroundCombat: false,
  production: 0
} as const;

export const SpaceDock = new DUnitTemplate(
  {
    capacity: 3,
    cost: 0,
    damage: 0,
    move: 0,
  },
  DEFAULT_ABILITIES
);

export const Carrier = new DUnitTemplate(
  {
    capacity: 4,
    cost: 3,
    damage: 9,
    move: 1,
  },
  DEFAULT_ABILITIES
);

export const Fighter = new DUnitTemplate(
  {
    capacity: 0,
    cost: 0.5,
    damage: 9,
    move: 0,
  },
  DEFAULT_ABILITIES
);

export const Infantry = new DUnitTemplate(
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

export const Destroyer = new DUnitTemplate(
  {
    capacity: 0,
    cost: 1,
    damage: 9,
    move: 2,
  },
  DEFAULT_ABILITIES
);
