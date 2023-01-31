import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { System } from '@ti-corp/primitives';

const adapter = createEntityAdapter<System>({});

const slice = createSlice({
  name: 'systems',
  initialState: adapter.getInitialState(),
  reducers: {
    // TODO: Add init for cover creating of galaxy

    setAll: adapter.setAll,
  },
});

export const [actions, reducer, selectors] = [
  slice.actions,
  slice.reducer,
  adapter.getSelectors(),
];
