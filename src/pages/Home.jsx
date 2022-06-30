import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";


const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortId, setSortId] = useState({
        name: "популярности",
        sortProperty: "rating"
    })

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const sortBy = sortId.sortProperty.replace("-", "")
        const order = sortId.sortProperty.includes("-") ? "asc" : "desc"

        fetch(`https://62b767e2691dcea2733e5c53.mockapi.io/reactPizza/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
        window.scroll(0, 0)
    }, [categoryId, sortId])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
                <Sort value={sortId} onChangeSort={(index) => setSortId(index)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i}/>)
                        : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </div>
    );
};

export default Home;