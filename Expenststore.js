import { createSlice } from "@reduxjs/toolkit"

const expenseitem={item:[]}
const expensSlice = createSlice({
    name: "expense",
    initialState: expenseitem,
    reducers: {
        Addfromform(state,action) {
            state.item=[...state.item,action.payload]
        },
        addfromapi(state, action) {
            state.item=[...state.item,action.payload]
        },
        deleteexpense(state, action) {
            state.item=state.item.filter(item=>item.key!=action.payload)
        }
    }
})
export const expenseaction = expensSlice.actions

export default expensSlice.reducer