import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import todoSlice from './todoSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    todoSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
