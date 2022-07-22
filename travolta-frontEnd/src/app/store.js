import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../features/destination/destinationSlice';
export const store = configureStore({
  reducer: {
    destinationInfo: destinationReducer,
  },
});
