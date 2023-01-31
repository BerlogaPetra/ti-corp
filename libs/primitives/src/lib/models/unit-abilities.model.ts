export class DUnitAbilities {
  constructor(
    public readonly isCanBeTransported: boolean,
    public readonly isCanSustainDamage: boolean,
    public readonly isCanAFBarrage: boolean,
    public readonly isCanBombardment: boolean,
    public readonly isCanSpaceCannon: boolean,
    public readonly isCanPlanetaryShield: boolean,
    public readonly isCanGroundCombat: boolean,
    public readonly production = 0
  ) {}
}
