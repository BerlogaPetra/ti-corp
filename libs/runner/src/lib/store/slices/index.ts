import { combineReducers } from '@reduxjs/toolkit';
import * as planetsSlice from './planets.slice';
import * as factionsSlice from './factions.slice';
import * as unitsSlice from './units.slice';
import * as strategiesSlice from './strategies.slice';
import * as technologiesSlice from './technologies.slice';
import * as systemsSlice from './systems.slice';

export const reducer = combineReducers({
  planets: planetsSlice.reducer,
  factions: factionsSlice.reducer,
  units: unitsSlice.reducer,
  systems: systemsSlice.reducer,
  strategies: strategiesSlice.reducer,
  technologies: technologiesSlice.reducer,
});
