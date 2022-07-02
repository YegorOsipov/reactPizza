import React, {useContext} from 'react';
import styles from "./Search.module.scss"
import searchIcon from "../../assets/img/search.svg"
import {SearchContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    const onChangeHandler = (e) => setSearchValue(e.currentTarget.value)
    const handlePress = (e) => {
        if (e.key === "Enter") setSearchValue("")
    }

    return (
        <div className={styles.root}>
            <img src={searchIcon} className={styles.icon} alt="search"/>
            <input value={searchValue} onChange={onChangeHandler} onKeyPress={handlePress} placeholder="Поиск пиццы..."/>
        </div>
    );
};

export default Search;