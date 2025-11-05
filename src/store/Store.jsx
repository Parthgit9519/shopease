import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartReducer.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
