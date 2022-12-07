import { SystemsNames } from '../enums/systems.enum';
import { UnitTemplate } from './unit.model';

export class Planet {
  constructor(
    public readonly name: string,
    public readonly system: SystemsNames,
    public readonly resources: number,
    public readonly influences: number
  ) {}

  public isExhausted = false;

  public units: UnitTemplate[] = [];

  public ready() {
    this.isExhausted = false;
  }

  public exhaust() {
    this.isExhausted = true;
  }

  public setUnits(units: UnitTemplate[]) {
    this.units = units;
  }

  public resetUnits() {
    this.units = [];
  }

  public addUnits(units: UnitTemplate[]) {
    this.units.push(...units);
  }
}
