import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.js';

import favReducer from './favSlice';
import formReducer from './formSlice';
import carrinhoReducer from './carrinhoSlice.js';

export default configureStore({
    reducer: {
        fav: favReducer,
        form: formReducer,
        carrinho: carrinhoReducer,
    },
    preloadedState: loadState(),
});