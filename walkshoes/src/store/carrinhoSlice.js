import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'carrinho',
    initialState: {
        data: [],
    },
    reducers: {
        createCardCar: (state, action) => {
            state.data = [action.payload].concat(state.data)
        },
        deleteCard: (state, action) => {
            state.data = state.data.filter((card) => card.id !== action.payload)
        },
    },
})

export const { createCardCar, deleteCard } = slice.actions;
export const selectCards = state => state.carrinho.data;

export default slice.reducer;