
import { DUnitTemplate } from './unit.model';

export class DPlanet {
  constructor(
    public readonly id: string,

    public readonly name: string,
    public readonly systemId: string,
    public readonly resources: number,
    public readonly influences: number
  ) {}

  public isExhausted = false;

  public units: DUnitTemplate[] = [];

  public ready() {
    this.isExhausted = false;
  }

  public exhaust() {
    this.isExhausted = true;
  }

  public setUnits(units: DUnitTemplate[]) {
    this.units = units;
  }

  public resetUnits() {
    this.units = [];
  }

  public addUnits(units: DUnitTemplate[]) {
    this.units.push(...units);
  }
}
