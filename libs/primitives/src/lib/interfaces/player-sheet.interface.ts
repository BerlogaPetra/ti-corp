export interface PlayerSheet {
  readonly id: string;
  readonly playerId: string;

  tacticPool: number;
  fleetPool: number;
  strategyPool: number;
  tradeGoods: number;
}
