import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost} from '../utils'

const dataAdapter = createEntityAdapter();

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        return await httpGet(`http://localhost:3000/tenis`);
    }
)

export const postData = createAsyncThunk(
    'data/postData',
    async (card) => {
        return await httpPost(`http://localhost:3000/tenis`, card);
    }
)

export const deleteData = createAsyncThunk(
    'data/removeData',
    async (card) => {
        return await httpDelete(`http://localhost:3000/tenis/${card.id}`);
    }
);

export const updateData = createAsyncThunk(
    'data/removeData',
    async (card) => {
        return await httpPut(`http://localhost:3000/tenis/${card.id}`, card);
    }
)

export const slice = createSlice({
    name: 'data',
    initialState: dataAdapter.getInitialState({
        loading: "idle"
    }),
    reducers: {
        createCard: dataAdapter.addOne,
        deleteCard: dataAdapter.removeOne,
    },
    extraReducers: {

        [fetchData.pending]: (state, action) => {state.loading = "loading";},
        [fetchData.fulfilled]: (state, action) => {state.loading = "done"; dataAdapter.addMany(state,action.payload);},
        [fetchData.rejected]: (state, action) => {state.loading = "failed";},
        
        [postData.pending]: (state, action) => {state.loading = "loading";},
        [postData.fulfilled]: (state, action) => {state.loading = "done"; dataAdapter.addOne(state,action.payload);},

        [deleteData.pending]: (state, action) => {state.loading = "loading";},
        [deleteData.fulfilled]: (state, action) => {state.loading = "done"; dataAdapter.removeOne(state,action.payload);},

        // [todo]: criar extra reducer de update (pra att no db)
        
    }
})

export const { createCard, deleteCard } = slice.actions;
export const selectCards = state => state.data;

export const {
    selectAll: selectAllData,
} = dataAdapter.getSelectors(state => state.data);

export default slice.reducer;