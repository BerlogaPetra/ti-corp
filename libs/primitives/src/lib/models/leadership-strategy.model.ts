import { DBaseStrategy } from './base-strategy.model';

export class DLeadershipStrategy extends DBaseStrategy {
  public primaryAbility = [
    'Gain 3 tokens',
    'Spend any amount of influence to gain tokens 3:1',
  ];

  public secondaryAbility = [
    'Spend any amount of influence to gain tokens 3:1',
  ];

  public applyPrimary(totalTokens: number, influenceAmount: number): number {
    return this.applySecondary(totalTokens, influenceAmount) + 3;
  }

  public applySecondary(totalTokens: number, influenceAmount: number): number {
    const influenceTokens = Math.floor(influenceAmount / 3);

    return totalTokens + influenceTokens;
  }
}
