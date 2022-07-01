import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";


const Home = ({searchValue}) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortId, setSortId] = useState({
        name: "популярности",
        sortProperty: "rating"
    })
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const sortBy = sortId.sortProperty.replace("-", "")
        const order = sortId.sortProperty.includes("-") ? "asc" : "desc"

        fetch(`https://62b767e2691dcea2733e5c53.mockapi.io/reactPizza/items?page=${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
        window.scroll(0, 0)
    }, [categoryId, sortId, page])

    const skeletonsMap = [...new Array(6)].map((_, i) => <PizzaSkeleton key={i}/>)
    const pizzasMap =
        pizzas
        .filter(f => f.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
                <Sort value={sortId} onChangeSort={(index) => setSortId(index)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoading ? skeletonsMap : pizzasMap }
            </div>
            <Pagination onChangePage={(num) => setPage(num)}/>
        </div>
    );
};

export default Home;