import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { Faction } from '@ti-corp/primitives';

const adapter = createEntityAdapter<Faction>();

const slice = createSlice({
  name: 'factions',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
  },
});

export const [actions, reducer, selectors] = [
  slice.actions,
  slice.reducer,
  adapter.getSelectors(),
];

