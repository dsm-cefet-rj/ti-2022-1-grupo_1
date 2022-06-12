import { createSlice } from '@reduxjs/toolkit';

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