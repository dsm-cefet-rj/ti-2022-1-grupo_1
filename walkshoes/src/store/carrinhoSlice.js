import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const carAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'car/fetchCard',
    async () => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        const cards = await Promise.race([httpGet(`http://localhost:3000/carrinho/`), timeout]);
        return {...cards};
    }
);

export const postCard = createAsyncThunk(
    'car/postCardCarrinho',
    async (item) => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        const cards = await Promise.race([httpPost(`http://localhost:3000/carrinho/add`, item), timeout]);
        return cards
    }
);

export const deleteCard = createAsyncThunk(
    'car/removeCard',
    async (item) => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        const id = await Promise.race([httpDelete(`http://localhost:3000/carrinho/delete/${item.id}`), timeout]);
        console.log("deleteCard", id)
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
    selectById,
    selectTotal: selectTotalCards,
} = carAdapter.getSelectors(state => state.carrinho);

export default slice.reducer;