import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // state.items.push(action.payload)
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems: (state, action) => {
          state.items = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, } = cartSlice.actions
export default cartSlice.reducer
