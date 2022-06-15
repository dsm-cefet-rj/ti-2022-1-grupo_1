import { createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

export const slice = createSlice({
    name: 'fav',
    initialState: {
        data: [],
    },
    reducers: {
        createCardFav: (state, action) => {
            state.data = [action.payload].concat(state.data)
        },
        deleteCard: (state, action) => {
            state.data = state.data.filter((card) => card.id !== action.payload)
        },
    },
})

export const { createCardFav, deleteCard } = slice.actions;
export const selectCards = state => state.fav.data;

export default slice.reducer;