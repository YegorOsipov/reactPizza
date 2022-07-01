import React from 'react';
import styles from "./Search.module.scss"
import searchIcon from "../../assets/img/search.svg"

const Search = ({value, onChangeSearchValue}) => {
    const onChangeHandler = (e) => onChangeSearchValue(e.currentTarget.value)
    const handlePress = (e) => {
        if (e.key === "Enter") onChangeSearchValue("")
    }

    return (
        <div className={styles.root}>
            <img src={searchIcon} className={styles.icon} alt="search"/>
            <input value={value} onChange={onChangeHandler} onKeyPress={handlePress} placeholder="Поиск пиццы..."/>
        </div>
    );
};

export default Search;