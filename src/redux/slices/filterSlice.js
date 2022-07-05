import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
    },
    currentPage: 1,
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
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeSortValue, changeCurrentPage } = filterSlice.actions
export default filterSlice.reducer
