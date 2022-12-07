import { TacticSteps } from '../enums/tactic-steps.enum';
import { Planet } from '../models/planet.model';
import { System } from '../models/system.model';
import { UnitTemplate } from '../models/unit.model';
import { FactionUnit } from './unit.interface';

interface TacticAction<Payload> {
  step: TacticSteps;
  payload: Payload;
}

export type ActivationAction = TacticAction<System>;
export type MovementAction = TacticAction<FactionUnit[]>;
export type GroundCombatAction = TacticAction<[Planet, FactionUnit[]][]>;
export type ProductionAction = TacticAction<[Planet | null, FactionUnit[]][]>;

export type AllActions = [
  ActivationAction,
  MovementAction | null,
  GroundCombatAction | null,
  ProductionAction | null
];
