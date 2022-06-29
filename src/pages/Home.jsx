import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";


const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://62b767e2691dcea2733e5c53.mockapi.io/reactPizza/items?category=${categoryId === 0 ? "" : categoryId}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
        window.scroll(0, 0)
    }, [categoryId])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
                <Sort/>
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