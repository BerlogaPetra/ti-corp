import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { Strategy } from '@ti-corp/primitives';
import { InvasionProps } from '../../interfaces/invasion-props.interface';
  
  const adapter = createEntityAdapter<Strategy>({});
  
  const slice = createSlice({
    name: 'technologies',
    initialState: adapter.getInitialState(),
    reducers: {
      addOne: adapter.addOne,
      addMany: adapter.addMany,
      invade: (state, action: PayloadAction<InvasionProps>) => {
        return state;
      },
    },
  });
  
  export const [actions, reducer, selectors] = [
    slice.actions,
    slice.reducer,
    adapter.getSelectors(),
  ];
  
  