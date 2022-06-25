import {useState} from "react";

export const Categories = () => {
    const categories = ["Все", "Мясные", "Гриль", "Острые", "Закрытые"]
    const [activeIndex, setActiveIndex] = useState(0)
    const onClickCategory = (i) => {
        setActiveIndex(i)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((title, index) =>
                        <li key={title} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ''}>{title}</li>)
                }
            </ul>
        </div>
    )
}