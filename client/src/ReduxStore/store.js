import { configureStore } from "@reduxjs/toolkit";
import WavesSlice from "./WavesSlice";

const store = configureStore({
  reducer: {
    Waves: WavesSlice,
  },
});

export default store;
