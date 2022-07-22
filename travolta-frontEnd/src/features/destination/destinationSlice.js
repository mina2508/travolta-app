import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  loading: false,
  destination: {},
  error: '',
};
//generate pending success or rejected
export const fetchDestination = createAsyncThunk(
  'destination/fetchDestination',
  async (reservationDetails) => {
    console.log(reservationDetails);
    const response = await axios.post(
      'http://localhost:5000/detinations',
      reservationDetails
    );
    console.log(response.data.hotels);
    return response.data;
  }
);
const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchDestination.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDestination.fulfilled, (state, action) => {
      state.destination = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchDestination.rejected, (state, action) => {
      state.destination = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
const destinationReducer = destinationSlice.reducer;
export default destinationReducer;
