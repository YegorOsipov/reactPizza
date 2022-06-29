export const Categories = ({value, onClickCategory}) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((title, index) =>
                        <li key={title} onClick={() => onClickCategory(index)} className={value === index ? "active" : ''}>{title}</li>)
                }
            </ul>
        </div>
    )
}