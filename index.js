import { createSlice ,configureStore} from "@reduxjs/toolkit"

const authnitication={isauth:false}
const authslice = createSlice({
    name: "authnitication",
    initialState: authnitication,
    reducers: {
        loogedin(state) {
            state.isauth = true
        },
        loogedout(state) {
            state.isauth=false
        }
    }
    
})
const store = configureStore({
    reducer:authslice.reducer
})

export const authaction=authslice.actions

export default store


