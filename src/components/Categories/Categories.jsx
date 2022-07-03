import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../redux/slices/filterSlice";

export const Categories = () => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    const dispatch = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    const onClickCategory = (index) => dispatch(changeCategory(index))

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) =>
                        <li key={category} onClick={() => onClickCategory(index)} className={categoryId === index ? "active" : ''}>{category}</li>)
                }
            </ul>
        </div>
    )
}