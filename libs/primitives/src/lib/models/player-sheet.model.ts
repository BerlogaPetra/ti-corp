


export class DPlayerSheet {

  public tacticPool = 3;
  public fleetPool = 3;
  public strategyPool = 2;
  public tradeGoods = 0;

  public get totalCommandPool(): number {
    return this.tacticPool + this.fleetPool + this.strategyPool;
  }

  public useTacticAction() {
    this.tacticPool -= 1;
  }

  public useStrategyAction() {
    this.strategyPool -= 1;
  }

  //   Add functionality about gain command tokens
}
