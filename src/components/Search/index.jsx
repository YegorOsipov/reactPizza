import React, {useCallback, useContext, useState} from 'react';
import styles from "./Search.module.scss"
import searchIcon from "../../assets/img/search.svg"
import clearIcon from "../../assets/img/x-icon.svg"
import {SearchContext} from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
    const [value, setValue] = useState("")

    const {setSearchValue} = useContext(SearchContext)
    const onClickClear = () => {
        setSearchValue("")
        setValue("")
    }

    const updateSearchValue = useCallback( debounce((str) => { setSearchValue(str) }, 250), [] )

    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }

    return (
        <div className={styles.root}>
            { value.trim() !== ""
                ? <img onClick={onClickClear} src={clearIcon} className={`${styles.icon} ${styles.iconX}`} alt="x"/>
                : <img src={searchIcon} className={styles.icon} alt="search"/>
            }
            <input value={value}
                   onChange={onChangeHandler}
                   placeholder="Поиск пиццы..."
            />
        </div>
    );
};

export default Search;