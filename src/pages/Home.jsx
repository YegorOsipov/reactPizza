import React, {useContext, useEffect, useRef, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {lists, Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {changeCurrentPage, setFilters} from "../redux/slices/filterSlice";
import qs from "qs";
import {useNavigate} from 'react-router-dom'


const Home = () => {
    const {categoryId, sort, currentPage} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {searchValue} = useContext(SearchContext)
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    // const [page, setPage] = useState(1)
    const onChangeCurrentPage = (num) => dispatch(changeCurrentPage(num))

    const fetchPizzas = () => {
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

    }

    //Если был первый рендер, то проверяй URL-параметры и сохраняем в редаксе
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = lists.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({...params, sort})
            )
            isSearch.current = true
        }
    }, [])

    //Если был первый рендер, то запрашиваем пиццы

    useEffect(() => {
        window.scroll(0, 0)
        if (!isSearch.current) {
            fetchPizzas()
        }

        isSearch.current = false
    }, [categoryId, sort.sortProperty, currentPage, searchValue])

    //Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sort.sortProperty, currentPage, searchValue])

    const skeletonsMap = [...new Array(4)].map((_, i) => <PizzaSkeleton key={i}/>)
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