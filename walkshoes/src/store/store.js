import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.js';

import favReducer from './favSlice';

export default configureStore({
    reducer: {
        fav: favReducer,
    },
    preloadedState: loadState(),
});