import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import cartitemslice from "./cartitem";
import notfyslice from "./notifyslice";

const store = configureStore({
  reducer: {
    cart: cartslice.reducer,
    cartitem: cartitemslice.reducer,
    notfy: notfyslice.reducer,
  },
});

export default store;
