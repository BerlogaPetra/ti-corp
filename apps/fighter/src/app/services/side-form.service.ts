import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActionsType } from '../enums/actions.enum';
import { Factions } from '../enums/factions.enum';
import { TechnologiesType } from '../enums/technologies.enum';
import { Action } from '../interfaces/action.interface';
import { Fleet } from '../interfaces/fleet.interface';
import { Technology } from '../interfaces/technology.interface';
import { Side } from '../models/side.model';
import { FormType } from '../types/form.type';

@Injectable()
export class SideFormService {
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  public create(tech: Technology[], actions: Action[]): FormType<Side> {
    const fleet: Fleet = {
      destroyers: 2,
      infantry: 2,
      fighters: 2,
      flagship: 1,
      dreadnoughts: 3,
    };
    const technologiesGroup = tech.reduce((allTechnologies, technology) => {
      return { ...allTechnologies, [technology.type]: false };
    }, {} as Record<TechnologiesType, boolean>);
    const actionsGroup = actions.reduce((allActions, action) => {
      return { ...allActions, [action.type]: false };
    }, {} as Record<ActionsType, boolean>);

    return this.formBuilder.group<Side>({
      fleet,
      faction: Factions.Sar,
      actions: actionsGroup,
      technologies: technologiesGroup,
    });
  }
}
