import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const favAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'fav/fetchCard',
    async () => {
        let endpoint = `http://localhost:3000/favoritos/`;
        let cards = await httpGet(endpoint);

        console.log('FETCH', endpoint);

        return cards ? (cards.map((item) => ({...item, selected: false}))) : (cards);
    }
);

export const postCard = createAsyncThunk(
    'fav/postCard',
    async (item) => {
        let endpoint = `http://localhost:3000/favoritos/add/`;
        let card = { ...(await httpPost(endpoint, item)), selected: false};

        console.log('POSTCARD', endpoint);

        return card;
    }
);

export const deleteCard = createAsyncThunk(
    'fav/removeCard',
    async (arr) => {
        let str = arr.map((item) => item.id).join('&');
        let endpoint = `http://localhost:3000/favoritos/delete/${str}`;
        let ids = await httpDelete(endpoint);

        console.log('DELETE', endpoint);

        return ids;
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
            favAdapter.addMany(state,action.payload);
            state.loading = "done";
            state.fetch = "up-to-date";
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
            favAdapter.addOne(state,action.payload);
            state.loading = "done";
            state.fetch = "ready";
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
            favAdapter.removeMany(state,action.payload);
            state.loading = "done";
            state.fetch = "ready";
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