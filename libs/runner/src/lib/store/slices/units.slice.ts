import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';
import { Unit } from '@ti-corp/primitives';

const adapter = createEntityAdapter<Unit>({});

const slice = createSlice({
  name: 'units',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
  },
});

export const [actions, reducer, selectors] = [
  slice.actions,
  slice.reducer,
  adapter.getSelectors(),
];


