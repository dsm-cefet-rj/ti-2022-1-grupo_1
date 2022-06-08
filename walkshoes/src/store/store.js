import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.js';

import favReducer from './favSlice';
import formReducer from './formSlice';

export default configureStore({
    reducer: {
        fav: favReducer,
        form: formReducer,
    },
    preloadedState: loadState(),
});