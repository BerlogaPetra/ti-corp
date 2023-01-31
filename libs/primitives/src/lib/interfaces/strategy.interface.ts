export interface Strategy {
  readonly id: string;
  readonly playerId: string;

  readonly name: string;

  readonly primaryAbility: string;
  readonly secondaryAbility: string;
}
