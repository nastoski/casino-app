import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSportsBets = createAsyncThunk('sportsBets/fetch', async () => {
    const response = await fetch('/api/sportsBets');
    const data = await response.json();
    return data;
});

const sportsBetsSlice = createSlice({
    name: 'sportsBets',
    initialState: {
        bets: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSportsBets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSportsBets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.bets = action.payload;
            })
            .addCase(fetchSportsBets.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default sportsBetsSlice.reducer;
