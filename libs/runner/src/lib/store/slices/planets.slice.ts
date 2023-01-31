import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { Planet } from '@ti-corp/primitives';

const adapter = createEntityAdapter<Planet>({});

const slice = createSlice({
  name: 'planets',
  initialState: adapter.getInitialState(),
  reducers: {
    setAll: adapter.setAll,
  },
});

export const [actions, reducer, selectors] = [
  slice.actions,
  slice.reducer,
  adapter.getSelectors(),
];
