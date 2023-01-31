// import { TacticSteps } from '../enums/tactic-steps.enum';
// import { DPlanet } from '../models/planet.model';
// import { DSystem } from '../models/system.model';
// import { DUnitTemplate } from '../models/unit.model';
// import {  Unit } from './unit.interface';

// interface TacticAction<Payload> {
//   step: TacticSteps;
//   payload: Payload;
// }

// export type ActivationAction = TacticAction<DSystem>;
// export type MovementAction = TacticAction<Unit[]>;
// export type GroundCombatAction = TacticAction<[DPlanet, Unit[]][]>;
// export type ProductionAction = TacticAction<[DPlanet | null, Unit[]][]>;

// export type AllActions = [
//   ActivationAction,
//   MovementAction | null,
//   GroundCombatAction | null,
//   ProductionAction | null
// ];
