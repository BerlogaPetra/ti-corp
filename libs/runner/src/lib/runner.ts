import { store } from './store';

import * as planetsSlice from './store/slices/planets.slice';
import * as systemsSlice from './store/slices/systems.slice';
import * as galaxyUtils from './utils/galaxy.utils';

export function runner() {
  createGalaxy();
}

function createGalaxy() {
  const galaxy = galaxyUtils.create();

  const setAllSystems = systemsSlice.actions.setAll(galaxy.systems);
  const setAllPlanets = planetsSlice.actions.setAll(galaxy.planets);

  store.dispatch(setAllSystems);
  store.dispatch(setAllPlanets);
}


// 4 + (2*3)  = 20.5 - 1F - 2I - 2PDS


// 10.5 = 1F + 2I + 2PDS 
// 10.5 = 1*-1 + 4 + 2PDS
// 10.5 = 3 + 2PDS
// 


// 4.5 - 3 = 1F + 2I
// 1.5 = 1F + 2I
// 


// 3 + 2 + 2F + 4I = 11

// 6 = 2F + 4I


// 4 + 3 + 1 + 1F + 3I = 13
// 8 = 13 - 1F + 3I
// 5 = 1F + 3I

// 5 - 3I = 1F
// 5 - 6 = 1F
// F = -1


// 6 = 2 *(5-3I) + 4I
// 6 = 10 - 6I + 4I
// 6 = 10 - 2I
// 2I = 4
// I = 2 
