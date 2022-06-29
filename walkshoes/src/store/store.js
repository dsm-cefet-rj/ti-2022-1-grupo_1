import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage';

import dataReducer from './dataSlice';
import favReducer from './favSlice';
import carrinhoReducer from './carrinhoSlice';
import chatReducer from "./chatSlice";

export default configureStore({
    reducer: {
        data: dataReducer,
        fav: favReducer,
        carrinho: carrinhoReducer,
        msg: chatReducer
    },
    // preloadedState: loadState(),
});