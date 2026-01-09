import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { propertyApi } from '../service/Property';
import propertyModalReducer from '../features/ui/modal/modalSlice';
import superHostReducer from '../features/ui/superHostToggle/superHostSlice';
import propertyTypeReducer from '../features/ui/filters/propertyTypeSlice';

export const store = configureStore({
  reducer: {
    [propertyApi.reducerPath]: propertyApi.reducer,
    propertyModal: propertyModalReducer,
    superHost: superHostReducer,
    propertyType: propertyTypeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(propertyApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
