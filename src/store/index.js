import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import bannerReducer from "../pages/Banner/store";

export default configureStore({
  reducer: {
    counter: counterReducer,
    banner: bannerReducer,
  },
  // middleware: ()=>[],
  devTools: true,
});
