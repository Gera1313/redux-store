import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  initialState: {
    cart: [],
    cartOpen: false,
  },
});

export default store;
