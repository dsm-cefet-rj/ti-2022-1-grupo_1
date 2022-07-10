import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const favAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'fav/fetchCard',
    async () => {
        let cards = await httpGet(`http://localhost:3000/favoritos/`);
        return cards ? (cards.map((item) => ({...item, selected: false}))) : (cards);
    }
);

export const postCard = createAsyncThunk(
    'fav/postCard',
    async (item) => {
        let card = await httpPost(`http://localhost:3000/favoritos/add/`, item);
        return {...card, selected: false};
    }
);

export const deleteCard = createAsyncThunk(
    'fav/removeCard',
    async (item) => {
        let id = await httpDelete(`http://localhost:3000/favoritos/delete/${item.id}`);
        return id;
    }
);

// [comment]: favoritos n precisa disso

// export const updateData = createAsyncThunk(
//     'fav/removeData',
//     async (card) => {
//         return await httpPut(`http://localhost:3000/favoritos/${card.id}`, card, 500);
//     }
// )

export const slice = createSlice({
    name: 'fav',
    initialState: favAdapter.getInitialState({
        loading: 'idle',
        fetch: 'ready'
    }),
    reducers: {
        switchSelect: favAdapter.upsertOne,
        switchSelectMany: favAdapter.upsertMany,
    },
    extraReducers: {
        
        // Fetch
        [fetchData.pending]: (state, action) => {
            state.loading = "loading";
            state.fetch = "waiting";
        },
        [fetchData.fulfilled]: (state, action) => {
            state.loading = "done";
            state.fetch = "up-to-date";
            favAdapter.addMany(state,action.payload);
        },
        [fetchData.rejected]: (state, action) => {
            state.loading = "failed";
            state.fetch = "ready";
        },

        // Post
        [postCard.pending]: (state, action) => {
            state.loading = "loading";
            state.fetch = "waiting";
        },
        [postCard.fulfilled]: (state, action) => {
            state.loading = "done";
            state.fetch = "ready";
            favAdapter.addOne(state,action.payload);
        },
        [postCard.rejected]: (state, action) => {
            state.loading = "failed"; 
            state.fetch = "up-to-date";
        },
        
        // Delete
        [deleteCard.pending]: (state, action) => {
            state.loading = "loading"; 
            state.fetch = "waiting";
        },
        [deleteCard.fulfilled]: (state, action) => {
            state.loading = "done";
            state.fetch = "ready";
            favAdapter.removeOne(state,action.payload);
        },
        [deleteCard.rejected]: (state, action) => {
            state.loading = "failed";
            state.fetch = "up-to-date";
        },

    }
})

export const { switchSelect, switchSelectMany } = slice.actions;

export const {
    selectAll: selectAllData,
    selectById: selectFavsById,
} = favAdapter.getSelectors(state => state.fav);

export default slice.reducer;