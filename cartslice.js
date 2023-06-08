import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: { isopen: false },
    reducers: {
        cartvisible(state) {
            state.isopen=!state.isopen
        },
       
    }

        
})

export default cartslice

export const cartaction=cartslice.actions

