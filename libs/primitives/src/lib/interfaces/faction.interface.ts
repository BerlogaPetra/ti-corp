import { DBaseStrategy } from '../models';

export interface Faction {
  readonly factionName: string;

  readonly unitIds: string[];

  readonly planetsIds: string[];

  readonly technologiesIds: string[];

  readonly playerSheetId: string;

  strategyId: DBaseStrategy;
}
