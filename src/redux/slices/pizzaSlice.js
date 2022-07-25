import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    items: [],
    status: ''
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const {category, sortBy, order, search, currentPage} = params
        const res = await axios.get(`https://-62b767e2691dcea2733e5c53.mockapi.io/reactPizza/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
        return res.data
    }
)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = "loading"
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "success"
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = "failed"
            state.items = []
        }
    }
})

// Action creators are generated for each case reducer function
export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer