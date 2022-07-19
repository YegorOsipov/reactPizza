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
        },
        setFilters: (state, action) => {
            state.sort = action.payload.sort
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeSortValue, changeCurrentPage, setFilters } = filterSlice.actions
export default filterSlice.reducer
