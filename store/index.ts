import { configureStore } from '@reduxjs/toolkit';
import elementsReducer from './features/elementsSlice';

export default configureStore({
  reducer: {
    elements: elementsReducer,
  },
})