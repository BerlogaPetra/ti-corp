import { Unit } from '../interfaces/unit.interface';
import { DUnitAbilities } from './unit-abilities.model';
import { DUnitProperties } from './unit-properties.model';

export class DUnitTemplate {
  constructor(
    public readonly properties: DUnitProperties,
    public readonly abilities: DUnitAbilities
  ) {}

  public get isCanGroundCombat(): boolean {
    return this.abilities.isCanGroundCombat;
  }

  public get isCanSpaceCombat(): boolean {
    return !this.isCanGroundCombat;
  }
}
