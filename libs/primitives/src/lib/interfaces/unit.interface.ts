export interface Unit {
  readonly id: string;
  readonly playerId: string;
  readonly unitName: string;
  readonly factionName: string;

  readonly cost: number;
  readonly move: number;
  readonly damage: number;
  readonly capacity: number;

  readonly isCanBeTransported: boolean;
  readonly isCanSustainDamage: boolean;
  readonly isCanAFBarrage: boolean;
  readonly isCanBombardment: boolean;
  readonly isCanSpaceCannon: boolean;
  readonly isCanPlanetaryShield: boolean;
  readonly production: number;

  readonly isCanGroundCombat: boolean;
  readonly isCanSpaceCombat: boolean;
}
