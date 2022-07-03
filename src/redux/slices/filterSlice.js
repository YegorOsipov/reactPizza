import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
    },
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.categoryId = action.payload
        },
        changeSortValue: (state, action) => {
            state.sort = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeSortValue } = filterSlice.actions
export default filterSlice.reducer
