import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const carAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'car/fetchCard',
    async () => {
        const cards = await httpGet(`http://localhost:3000/carrinho`, 500);
        return cards ? (cards.map((item) => ({...item}))) : (cards);
    }
);

export const postCard = createAsyncThunk(
    'car/postCard',
    async (item) => {
        const card = await httpPost(`http://localhost:3000/carrinho`, item, 500);
        return {...card};
    }
);

export const deleteCard = createAsyncThunk(
    'car/removeCard',
    async (item) => {
        await httpDelete(`http://localhost:3000/carrinho/${item.id}`, 500);
        return item.id;
    }
);

export const slice = createSlice({
    name: 'carrinho',
    initialState: carAdapter.getInitialState({
        loading: 'idle',
        fetch: 'ready'
    }),
    reducers: {
        createCardCar: (state, action) => {
            state.data = [action.payload].concat(state.data)
        },
    },
    extraReducers: {
        
        [fetchData.pending]: (state, action) => {state.loading = "loading"; state.fetch = "waiting";},
        [fetchData.fulfilled]: (state, action) => {state.loading = "done"; state.fetch = "up-to-date"; carAdapter.addMany(state,action.payload);},
        [fetchData.rejected]: (state, action) => {state.loading = "failed"; state.fetch = "ready";},

        [postCard.pending]: (state, action) => {state.loading = "loading"; state.fetch = "waiting";},
        [postCard.fulfilled]: (state, action) => {state.loading = "done"; state.fetch = "ready"; carAdapter.addOne(state,action.payload);},
        [postCard.rejected]: (state, action) => {state.loading = "failed"; state.fetch = "up-to-date";},
        
        [deleteCard.pending]: (state, action) => {state.loading = "loading"; state.fetch = "waiting";},
        [deleteCard.fulfilled]: (state, action) => {state.loading = "done"; state.fetch = "ready"; carAdapter.removeOne(state,action.payload);},
        [deleteCard.rejected]: (state, action) => {state.loading = "failed"; state.fetch = "up-to-date";},

    }
})

export const { createCardCar } = slice.actions;
export const {
    selectAll: selectAllData,
} = carAdapter.getSelectors(state => state.carrinho);

export default slice.reducer;