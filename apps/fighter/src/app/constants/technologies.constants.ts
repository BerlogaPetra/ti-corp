import { Technologies } from '../enums/technologies.enum';
import { Technology } from '../interfaces/technology.interface';

const DESTROYER_2: Technology = {
  description: 'Fleet Upgrade',
  type: Technologies.Destroyer2,
  fleetStats: {
    cost: 9,
    damage: 8,
    passiveEffects: ['AFB 3x6'],
    move: 2,
  },
};

const FIGHTER_2: Technology = {
  description: 'Fleet Upgrade',
  type: Technologies.Fighter2,
  fleetStats: {
    cost: 9,
    damage: 8,
    passiveEffects: ['Excessive capacity 1'],
    move: 2,
  },
};

const CRUISER_2: Technology = {
  description: 'Fleet Upgrade',
  type: Technologies.Cruiser2,
  fleetStats: {
    cost: 9,
    damage: 8,
    move: 4,
    capacity: 1,
  },
};

export const TECHNOLOGIES: Technology[] = [DESTROYER_2, FIGHTER_2, CRUISER_2];
