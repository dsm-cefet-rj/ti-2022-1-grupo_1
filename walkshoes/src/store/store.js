import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage';

import favReducer from './favSlice';
import formReducer from './formSlice';
import carrinhoReducer from './carrinhoSlice';

export default configureStore({
    reducer: {
        fav: favReducer,
        form: formReducer,
        carrinho: carrinhoReducer,
    },
    // preloadedState: loadState(),
});