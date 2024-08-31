import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCasinoBets = createAsyncThunk('casinoBets/fetch', async () => {
  const response = await fetch('/api/casinoBets');
  const data = await response.json();
  return data;
});

const casinoBetsSlice = createSlice({
  name: 'casinoBets',
  initialState: {
    bets: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCasinoBets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCasinoBets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bets = action.payload;
      })
      .addCase(fetchCasinoBets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default casinoBetsSlice.reducer;
