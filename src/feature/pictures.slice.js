import { createSlice } from "@reduxjs/toolkit";

// cela nous permet de passer les donnée et par la suite pouvoir les traiter
export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPicturesData: (state, action) => {
      state.pictures = action.payload;
    },
  },
});

export const { setPicturesData } = picturesSlice.actions;
export default picturesSlice.reducer;
