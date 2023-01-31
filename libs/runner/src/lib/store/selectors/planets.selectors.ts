import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { selectors } from '../slices/planets.slice';

const selectSelf = (state: RootState) => state.planets;
const selectAllPlanets = createSelector(selectSelf, selectors.selectAll);

export const selectExhaustedPlanets = createSelector(
  selectAllPlanets,
  (allPlanets) => {
    return allPlanets.filter((planet) => planet.isExhausted);
  }
);
