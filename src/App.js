import './scss/app.scss';
import {Header} from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import {createContext, useState} from "react";

export const SearchContext = createContext()

const App = () => {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                        <Route path={"/404"} element={<NotFound/>}/>
                        <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;

