import filterReducer, {changeCategory, changeCurrentPage, changeSortValue} from "../filterSlice";

let startState

beforeEach(() => {
    startState = {
        categoryId: 0,
        sort: {
            name: "популярности",
            sortProperty: "rating",
        },
        currentPage: 0,
    }
})

test("check changing pizzas category", () => {
    const newCategory = 2
    const endState = filterReducer(startState, changeCategory(newCategory))

    expect(endState.categoryId).toBe(newCategory)
})

test("sort value should be change", () => {
    const newValue = "title"
    const endState = filterReducer(startState, changeSortValue(newValue))

    expect(endState.sort.sortProperty).toBe(newValue)
})

test("number page should be change", () => {
    const newValue = 2
    const endState = filterReducer(startState, changeCurrentPage(newValue))

    expect(endState.currentPage).toBe(newValue)
})