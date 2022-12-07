import { FactionUnit } from '../interfaces/unit.interface';
import { UnitTemplate } from '../models/unit.model';

function buildUnit(
  factionName: string,
  unitTemplate: UnitTemplate
): FactionUnit {
  return { ...unitTemplate, factionName };
}

function buildUnits(
  factionName: string,
  unitTemplate: UnitTemplate,
  amount: number
): FactionUnit[] {
  return Array.from({ length: amount }).map(() => {
    return buildUnit(factionName, unitTemplate);
  });
}

export const UnitsUtils = {
  buildUnit,
  buildUnits,
};
