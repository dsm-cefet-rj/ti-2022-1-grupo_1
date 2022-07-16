import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const favAdapter = createEntityAdapter();
const url = `http://localhost:3000/favoritos`;

export const fetchData = createAsyncThunk(
    'fav/fetchCard',
    async () => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        let token = localStorage.getItem("token");
        let endpoint = `${url}${(token ? `/?token=${token}` : '')}`;
        let cards = await Promise.race([httpGet(endpoint), timeout]);

        console.log('FETCH', endpoint);

        return cards ? (cards.map((item) => ({...item, selected: false}))) : (cards);
    }
);

export const postCard = createAsyncThunk(
    'fav/postCard',
    async (item) => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        let token = localStorage.getItem("token");
        let endpoint = `${url}/add/${(token ? `/?token=${token}` : '')}`;
        let card = { ...(await Promise.race([httpPost(endpoint, item), timeout])), selected: false};

        console.log('POSTCARD', endpoint);

        return card;
    }
);

export const deleteCard = createAsyncThunk(
    'fav/removeCard',
    async (arr) => {
        let timeout = new Promise((res, rej) => setTimeout(rej, 20000));
        let token = localStorage.getItem("token");
        let str = arr.map((item) => item.id).join('&');
        let endpoint = `${url}/delete/${str}${(token ? `/?token=${token}` : '')}`;
        let ids = await Promise.race([httpDelete(endpoint), timeout]);

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
        fetch: 'ready',
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
    selectAll,
    selectById,
    selectTotal,
} = favAdapter.getSelectors(state => state.fav);

export default slice.reducer;