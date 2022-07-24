import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.items = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer