import { SystemsNames } from '../enums/systems.enum';
import {
  Darien,
  Sol1,
  Sol2,
  Wellon1,
  Wellon2,
  Zohbat1,
  Zohbat2,
} from './planets.models';
import { System } from './system.model';

export const DarienSystem = new System(SystemsNames.Darien, [Darien]);

export const ZohbatSystem = new System(SystemsNames.Zohbat, [Zohbat1, Zohbat2]);

export const SolSystem = new System(SystemsNames.Sol, [Sol1, Sol2]);

export const WellonSystem = new System(SystemsNames.Wellon, [Wellon1, Wellon2]);

export const systems = [DarienSystem, ZohbatSystem, SolSystem, WellonSystem];
