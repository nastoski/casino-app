import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface PageState {
    pages: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PageState = {
    pages: [],
    status: 'idle',
    error: null,
};

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
    const response = await fetch('/api/pages');
    return response.json();
});

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pages = action.payload;
            })
            .addCase(fetchPages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load pages';
            });
    },
});

export default pageSlice.reducer;
