import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice";

// cela va nous permettre de combiner tout nos reducers
export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
