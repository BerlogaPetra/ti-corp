import { Unit } from '../interfaces/unit.interface';
import { UnitAbilities } from './unit-abilities.model';
import { UnitProperties } from './unit-properties.model';

export class UnitTemplate implements Unit {
  constructor(
    public readonly properties: UnitProperties,
    public readonly abilities: UnitAbilities
  ) {}

  public get isCanGroundCombat(): boolean {
    return this.abilities.isCanGroundCombat;
  }

  public get isCanSpaceCombat(): boolean {
    return !this.isCanGroundCombat;
  }
}
