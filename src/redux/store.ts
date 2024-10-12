import {configureStore} from '@reduxjs/toolkit';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling the serializable check middleware
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
