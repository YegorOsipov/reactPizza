import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeSortValue, changeCurrentPage, setFilters } = cartSlice.actions
export default cartSlice.reducer
