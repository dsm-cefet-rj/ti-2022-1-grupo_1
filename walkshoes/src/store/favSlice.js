import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'fav',
    initialState: {
        data: [],
    },
    reducers: {
        createCard: (state, action) => {
            state.data = [action.payload].concat(state.data)
        },
        deleteCard: (state, action) => {
            state.data = state.data.filter((card) => card.id !== action.payload)
        },
    },
})

export const { createCard, deleteCard } = slice.actions;
export const selectCards = state => state.fav.data;

export default slice.reducer;