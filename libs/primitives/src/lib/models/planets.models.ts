import { SystemsNames } from '../enums/systems.enum';
import { Planet } from './planet.model';

export const Darien = new Planet('Darien', SystemsNames.Darien, 4, 4);

export const Zohbat1 = new Planet('Zohbat1', SystemsNames.Zohbat, 4, 4);
export const Zohbat2 = new Planet('Zohbat2', SystemsNames.Zohbat, 4, 4);

export const Sol1 = new Planet('Sol1', SystemsNames.Sol, 3, 1);
export const Sol2 = new Planet('Sol2', SystemsNames.Sol, 2, 2);

export const Wellon1 = new Planet('Wellon1', SystemsNames.Wellon, 1, 0);
export const Wellon2 = new Planet('Wellon2', SystemsNames.Wellon, 2, 1);

export const planets = [Darien, Zohbat1, Zohbat2, Sol1, Sol2, Wellon1, Wellon2];
