// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   initialState: {
//     cart: [],
//     cartOpen: false,
//   },
// });

// export default store;

import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers);
