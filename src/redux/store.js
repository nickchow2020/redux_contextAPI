import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterReducer";
import stock from "./stockReducer"

export const store = configureStore({
  reducer :{
    counter,
    stock
  }
})