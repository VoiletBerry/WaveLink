import { createSlice } from "@reduxjs/toolkit";

const WaveSlice = createSlice({
  name: "Waves",
  initialState: [],
  reducers: {
    addWave: (state, action) => {
      return [action.payload];
    },
  },
});

export const { addWave } = WaveSlice.actions;
export default WaveSlice.reducer;
