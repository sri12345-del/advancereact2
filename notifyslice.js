import { createSlice } from "@reduxjs/toolkit";

const notfyslice = createSlice({
    name: "notfy",
    initialState: { title: "", message: "" },
    reducers: {
        loodingstate(state) {
            state.title = "seanding..."
            state.message="sending cart data!"
        },
        loodingerror(state) {
            state.title = "error"
            state.message="sending cartdata failed!"
        },
        loodingsucess(state) {
            state.title = "success"
            state.message="sent cart data sucessfully"
        }
    }
    
})

export const notfyaction = notfyslice.actions

export default notfyslice;