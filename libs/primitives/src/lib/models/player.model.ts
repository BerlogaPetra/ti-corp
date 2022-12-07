import { SystemsNames } from '../enums/systems.enum';
import { TacticSteps, TacticStepsType } from '../enums/tactic-steps.enum';
import { AllActions } from '../interfaces/action.interface';
import { FactionUnit } from '../interfaces/unit.interface';
import { BaseStrategy } from './base-strategy.model';
import { Planet } from './planet.model';
import { PlayerSheet } from './player-sheet.model';
import { System } from './system.model';
import { systems } from './systems.models';
import { UnitTemplate } from './unit.model';

export class Player {
  constructor(
    public readonly factionName: string,
    private readonly planets: Planet[],
    private readonly playerSheet: PlayerSheet,
    private readonly units: UnitTemplate[],
    private readonly technologies: null[]
  ) {}

  private strategy: BaseStrategy | null = null;

  public pickStrategy(strategy: BaseStrategy) {
    this.strategy = strategy;
  }

  public useStrategy() {
    this.strategy?.applyPrimary();
  }

  public performTactic(actions: AllActions) {
    const [activationAction, moveAction, groundCombatAction, productionAction] =
      actions;

    const system = this.activate(activationAction.payload.systemName);

    if (moveAction) {
      this.move(activationAction.payload, moveAction.payload);

      if (activationAction.payload.isSpaceCombatAvailable) {
        this.combat(system, moveAction.payload);
      }
    }

    if (groundCombatAction) {
      groundCombatAction.payload.forEach(([planet, units]) => {
        this.invasion(planet, units);
      });
    }

    if (
      productionAction &&
      system.isProductionAvailable
    ) {
      productionAction.payload.forEach(([planet, units]) => {
        this.#production(planet, units);
      })
      
    }
  }

  private activate(systemName: SystemsNames) {
    this.playerSheet.useTacticAction();

    const activeSystem = systems.find(
      (system) => system.systemName === systemName
    );

    if (!activeSystem) {
      throw 'Active System not exist';
    }

    activeSystem?.activate(this.factionName);

    return activeSystem;
  }

  private move(system: System, units: FactionUnit[]) {
    system.addUnits(this.factionName, units);
  }

  private combat(system: System, units: FactionUnit[]) {
    console.log(`Fight in ${system} with units count ${units.length}`);
  }

  private invasion(planets: Planet, units: FactionUnit[]) {
    console.log(
      `Invasion in planets ${planets} with units count ${units.length}`
    );
  }

  #production(planet: Planet |null, units: FactionUnit[]) {
    console.log(`Production`)
  }
   
}
