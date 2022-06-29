export const pizzasState = []
const SET_PIZZAS =  "PIZZAS/SET-PIZZAS"
const SET_PIZZAS_CATEGORY =  "PIZZAS/SET-PIZZAS-CATEGORY"


export const pizzasReducer = (state = pizzasState, action) => {
    switch (action.type) {
        case SET_PIZZAS: {
            return [...action.pizzas]
        }
        case SET_PIZZAS_CATEGORY: {
            return state
        }
        default:
            return state
    }
}

export const setPizzasAC = (pizzas) => ({type: SET_PIZZAS, pizzas})
export const setPizzasCategory = (category) => ({type: SET_PIZZAS_CATEGORY, category})
