import './scss/app.scss';
import {Header} from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import {useState} from "react";


const App = () => {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="wrapper">
            <Header title={searchValue} onChangeSearchValue={(value) => setSearchValue(value)}/>
            <div className="content">
                <Routes>
                    <Route path={"/"} element={<Home searchValue={searchValue}/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/404"} element={<NotFound/>}/>
                    <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

