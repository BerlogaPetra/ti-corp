import { SystemsNames } from "../enums/systems.enum";

export abstract class BaseStrategy {
  public readonly system?: SystemsNames

  public abstract primaryAbility: string[];

  public abstract secondaryAbility: string[];

  public abstract applyPrimary(...args: unknown[]): unknown

  public abstract applySecondary(...args: unknown[]): unknown
}
