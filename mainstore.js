import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import cartitemslice from "./cartitem";


const store = configureStore({
    reducer:{cart:cartslice.reducer,cartitem:cartitemslice.reducer}
})



export default store