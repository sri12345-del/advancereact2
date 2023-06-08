import { configureStore ,createSlice} from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: { isopen: false },
    reducers: {
        cartvisible(state) {
            state.isopen=!state.isopen
        }
    },
        
})
const store = configureStore({
    reducer:cartslice.reducer
})

export const cartaction=cartslice.actions

export default store