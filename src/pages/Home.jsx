import React, {useContext, useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {changeCurrentPage} from "../redux/slices/filterSlice";


const Home = () => {
    const {categoryId, sort, currentPage} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const {searchValue} = useContext(SearchContext)
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const [page, setPage] = useState(1)
    const onChangeCurrentPage = (num) => dispatch(changeCurrentPage(num))

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const sortBy = sort.sortProperty.replace("-", "")
        const order = sort.sortProperty.includes("-") ? "asc" : "desc"
        const search = searchValue ? `&search=${searchValue}` : ""

        axios.get(`https://62b767e2691dcea2733e5c53.mockapi.io/reactPizza/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setPizzas(res.data)
                setIsLoading(false)
            })

        window.scroll(0, 0)
    }, [categoryId, sort.sortProperty, currentPage, searchValue])

    const skeletonsMap = [...new Array(6)].map((_, i) => <PizzaSkeleton key={i}/>)
    const pizzasMap =
        pizzas
        .filter(f => f.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoading ? skeletonsMap : pizzasMap }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangeCurrentPage}/>
        </div>
    );
};

export default Home;