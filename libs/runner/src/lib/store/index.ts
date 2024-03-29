import { configureStore, Store } from '@reduxjs/toolkit';

import { reducer } from './slices';

export const store = configureStore({
  reducer,
  
});


export type RootState = ReturnType<typeof store.getState>