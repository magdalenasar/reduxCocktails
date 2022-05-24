import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailApi from "./cocktailApi";

const store = configureStore({
  reducer: combineReducers({
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  }),
});

export default store;
