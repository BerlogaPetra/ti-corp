import { timeStamp } from 'console';
import { SystemsNames } from '../enums/systems.enum';
import { FactionUnit } from '../interfaces/unit.interface';
import { Planet } from './planet.model';

export class System {
  constructor(
    public readonly systemName: SystemsNames,
    public readonly planets: Planet[],
    public readonly anomaly?: null
  ) {}

  public state: Map<string, FactionUnit[]> = new Map();

  public activate(factionName: string) {
    this.state.set(factionName, []);
  }

  public resetActivation(factionName: string) {
    this.state.delete(factionName);
  }

  public addUnits(factionName: string, units: FactionUnit[]) {
    const currentFactionUnits = this.state.get(factionName) ?? [];
    const allUnits = [...currentFactionUnits, ...units];

    this.state.set(factionName, allUnits);
  }

  public removeUnits(factionName: string, units: FactionUnit[]) {
    // TODO
  }

  public get isSpaceCombatAvailable() {
    return this.#isMultiFaction && this.#spaceCombatUnits.size > 1;
  }

  public get isGroundCombatAvailable() {
    return this.#isMultiFaction && this.#groundCombatUnits.size > 1;
  }

  public get isProductionAvailable() {
    return [...this.state.values()]
      .flat()
      .some((unit) => unit.abilities.production > 0);
  }

  get #isMultiFaction() {
    return this.state.size > 1;
  }

  get #spaceCombatUnits() {
    return new Map(
      Array.from(this.state.entries()).reduce((base, [key, units]) => {
        const targetUnits = units.filter((unit) => unit.isCanSpaceCombat);

        return targetUnits.length > 0 ? [...base, [key, targetUnits]] : base;
      }, [] as [string, FactionUnit[]][])
    );
  }

  get #groundCombatUnits() {
    return new Map(
      Array.from(this.state.entries()).reduce((base, [key, units]) => {
        const targetUnits = units.filter((unit) => unit.isCanGroundCombat);

        return targetUnits.length > 0 ? [...base, [key, targetUnits]] : base;
      }, [] as [string, FactionUnit[]][])
    );
  }
}
