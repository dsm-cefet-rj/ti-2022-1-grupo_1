import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const carAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'car/fetchCard',
    async () => {
        const cards = await httpGet(`http://localhost:3000/carrinho/`);
        return {...cards};
    }
);

export const postCard = createAsyncThunk(
    'car/postCardCarrinho',
    async (item) => {
        const cards = await httpPost(`http://localhost:3000/carrinho/add`, item);
        return cards
    }
);

export const deleteCard = createAsyncThunk(
    'car/removeCard',
    async (item) => {
        await httpDelete(`http://localhost:3000/carrinho/delete/${item.id}`);
        console.log("deleteCard", item.id)
        return item.id;
    }
);

// export const updateCard = createAsyncThunk(
//     'fav/removeData',
//     async (card) => {
//         return await httpPut(`http://localhost:3000/favoritos/${card.id}`, card, 500);
//     }
// )

export const slice = createSlice({
    name: 'carrinho',
    initialState: carAdapter.getInitialState({
        loading: 'idle',
        fetch: 'ready'
    }),
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

export const {
    selectAll: selectAllData,
    selectById: selectCardsById,
} = carAdapter.getSelectors(state => state.carrinho);

export default slice.reducer;