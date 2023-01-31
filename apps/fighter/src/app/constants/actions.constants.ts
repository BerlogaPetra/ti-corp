import { Actions } from '../enums/actions.enum';
import { Action } from '../interfaces/action.interface';

const MORAL_BOOST: Action = {
  description: 'Add +1 for each unit at the current round',
  type: Actions.MoralBoost,
};

const FIGHTERS_PROTOTYPE: Action = {
  description: 'Add +2 for each fighter unit at the current combat',
  type: Actions.FightersPrototype,
};

const SABOTAGE: Action = {
  description: 'Discard current action',
  type: Actions.Sabotage,
};

const VETO: Action = {
  description: 'Remove current agenda',
  type: Actions.Veto,
};

export const ACTIONS: Action[] = [
  MORAL_BOOST,
  FIGHTERS_PROTOTYPE,
  SABOTAGE,
  VETO,
];
