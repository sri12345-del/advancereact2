import { createSlice } from "@reduxjs/toolkit";

const cartitemslice = createSlice({
    name: "item",
    initialState: { item: [], totalquantity: 0 },
    reducers: {
        addcartitem(state, action) {
            const newitem = action.payload
            const existingitem = state.item.find(item => item.id === newitem.id)
            state.totalquantity=state.totalquantity+1
            if (!existingitem) {
                state.item.push({
                    id: newitem.id,
                    price: newitem.price,
                    quantity: 1,
                    totalprice: newitem.price,
                    name:newitem.title
                })
            } else {
                existingitem.quantity++;
                existingitem.totalprice=existingitem.totalprice+newitem.price
            }
        },
        removeitem(state, action) {
            const id = action.payload
            const existingitem = state.item.find(val => val.id === id)
            state.totalquantity=state.totalquantity-1
            if (existingitem.quantity===1) {
                state.item = state.item.filter(val => val.id == id)
            } else {
                existingitem.quantity--
            }
        }
    }
})

export default cartitemslice

export const cartitemaction=cartitemslice.actions