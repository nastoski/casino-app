import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import casinoBetsReducer from './slices/casinoBetsSlice';
import sportsBetsReducer from './slices/sportsBetsSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    casinoBets: casinoBetsReducer,
    sportsBets: sportsBetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
