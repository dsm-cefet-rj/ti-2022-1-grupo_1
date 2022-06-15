import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const favAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'fav/fetchData',
    async () => {
        return await httpGet(`http://localhost:3000/favoritos`);
    }
);

export const postData = createAsyncThunk(
    'fav/postData',
    async (card) => {
        return await httpPost(`http://localhost:3000/favoritos`, card);
    }
);

export const deleteData = createAsyncThunk(
    'fav/removeData',
    async (card) => {
        await httpDelete(`http://localhost:3000/favoritos/${card.id}`);
        return card.id;
    }
);

// [comment]: favoritos n precisa disso

// export const updateData = createAsyncThunk(
//     'fav/removeData',
//     async (card) => {
//         return await httpPut(`http://localhost:3000/favoritos/${card.id}`, card);
//     }
// )

export const slice = createSlice({
    name: 'fav',
    initialState: favAdapter.getInitialState({
        loading: "idle",
    }),
    reducers: {
        createCardFav: favAdapter.addOne,
        deleteCard: favAdapter.removeOne,
    },
    extraReducers: {
        
        [fetchData.pending]: (state, action) => {state.loading = "loading";},
        [fetchData.fulfilled]: (state, action) => {state.loading = "done"; favAdapter.addMany(state,action.payload);},
        
        [postData.pending]: (state, action) => {state.loading = "loading";},
        [postData.fulfilled]: (state, action) => {state.loading = "done"; favAdapter.addOne(state,action.payload);},
        
        [deleteData.pending]: (state, action) => {state.loading = "loading";},
        [deleteData.fulfilled]: (state, action) => {state.loading = "done"; favAdapter.removeOne(state,action.payload);},

    }
})

export const { createCardFav, deleteCard, isLoading } = slice.actions;

export const {
    selectAll: selectAllData,
} = favAdapter.getSelectors(state => state.fav);

export default slice.reducer;