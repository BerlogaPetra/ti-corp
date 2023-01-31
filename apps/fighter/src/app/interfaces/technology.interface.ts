import { TechnologiesType } from '../enums/technologies.enum';
import { FleetStats } from './fleet-stats.interface';

export interface Technology {
  readonly type: TechnologiesType;
  readonly description: string;
  readonly fleetStats?: FleetStats
}
