import { configureStore } from '@reduxjs/toolkit';
import { accordionReducer } from './FAQ/accordionSlice';

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
