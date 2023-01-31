import { ActionsType } from '../enums/actions.enum';
import { FactionsType } from '../enums/factions.enum';
import { TechnologiesType } from '../enums/technologies.enum';
import { Fleet } from '../interfaces/fleet.interface';

export class Side {
  constructor(
    public readonly faction: FactionsType,
    public readonly fleet: Fleet,
    public readonly technologies: Record<TechnologiesType, boolean>,
    public readonly actions: Record<ActionsType, boolean>
  ) {}
}
