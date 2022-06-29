import {pizzasReducer, setPizzasAC} from "../pizzas-reducer";

let startState

beforeEach(() => {
    startState = [
        {
            "id": 1,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "title": "Сырная",
            "types": [
                0
            ],
            "sizes": [
                26,
                40
            ],
            "price": 245,
            "category": 0,
            "rating": 6
        },
        {
            "id": 2,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            "title": "Цыпленок барбекю",
            "types": [
                0
            ],
            "sizes": [
                26,
                40
            ],
            "price": 295,
            "category": 1,
            "rating": 4
        },
        {
            "id": 3,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
            "title": "Кисло-сладкий цыпленок",
            "types": [
                1
            ],
            "sizes": [
                26,
                30,
                40
            ],
            "price": 275,
            "category": 2,
            "rating": 2
        },
    ]
})

test("check settings pizzas", () => {
    const endState = pizzasReducer([], setPizzasAC(startState))
    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(startState[0].title)
    expect(endState[1].id).toBe(startState[1].id)
    expect(endState[2].price).toBe(startState[2].price)
})
