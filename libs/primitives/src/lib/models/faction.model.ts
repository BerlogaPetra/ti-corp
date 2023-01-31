// import { SystemsNames } from '../enums/systems.enum';
// import { TacticSteps, TacticStepsType } from '../enums/tactic-steps.enum';
// import { AllActions } from '../interfaces/action.interface';
// import { DFactionUnit } from '../interfaces/unit.interface';
// import { DBaseStrategy } from './base-strategy.model';
// import { DPlanet } from './planet.model';
// import { DPlayerSheet } from './player-sheet.model';
// import { DSystem } from './system.model';
// import { systems } from './systems.models';
// import { DUnitTemplate } from './unit.model';


// export class DFaction {
//   constructor(public readonly factionName: string) {}

//   public readonly unitIds: string[] = [];

//   public readonly planetsIds: string[] = [];

//   public readonly technologiesIds: string[] = [];

//   public readonly playerSheetId: DPlayerSheet = new DPlayerSheet();

//   public strategyId: DBaseStrategy | null = null;

//   // public pickStrategy(strategy: BaseStrategy) {
//   //   this.strategyId = strategy;
//   // }

//   // public useStrategy() {
//   //   this.strategyId?.applyPrimary();
//   // }

//   // public performTactic(actions: AllActions) {
//   //   const [activationAction, moveAction, groundCombatAction, productionAction] =
//   //     actions;

//   //   const system = this.activate(activationAction.payload.systemName);

//   //   if (moveAction) {
//   //     this.move(activationAction.payload, moveAction.payload);

//   //     if (activationAction.payload.isSpaceCombatAvailable) {
//   //       this.combat(system, moveAction.payload);
//   //     }
//   //   }

//   //   if (groundCombatAction) {
//   //     groundCombatAction.payload.forEach(([planet, units]) => {
//   //       this.invasion(planet, units);
//   //     });
//   //   }

//   //   if (productionAction && system.isProductionAvailable) {
//   //     productionAction.payload.forEach(([planet, units]) => {
//   //       this.#production(planet, units);
//   //     });
//   //   }
//   // }

//   // private activate(systemName: SystemsNames) {
//   //   this.playerSheet.useTacticAction();

//   //   const activeSystem = systems.find(
//   //     (system) => system.systemName === systemName
//   //   );

//   //   if (!activeSystem) {
//   //     throw 'Active System not exist';
//   //   }

//   //   activeSystem?.activate(this.factionName);

//   //   return activeSystem;
//   // }

//   // private move(system: System, units: FactionUnit[]) {
//   //   system.addUnits(this.factionName, units);
//   // }

//   // private combat(system: System, units: FactionUnit[]) {
//   //   console.log(`Fight in ${system} with units count ${units.length}`);
//   // }

//   // private invasion(planets: Planet, units: FactionUnit[]) {
//   //   console.log(
//   //     `Invasion in planets ${planets} with units count ${units.length}`
//   //   );
//   // }

//   // #production(planet: Planet | null, units: FactionUnit[]) {
//   //   console.log(`Production`);
//   // }
// }
