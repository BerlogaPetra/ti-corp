import { AfbDecisionsType } from '../enums/afb-decision.enum';
import { Roll } from './roll.interface';

export interface AFBSide {
  readonly decision: AfbDecisionsType;
  readonly rolls: Roll[];
  readonly assignedHits: number;
}

export interface AFBForm {
  readonly attacker: AFBSide;
  readonly defender: AFBSide;
}
