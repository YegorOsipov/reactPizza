import './scss/app.scss';
import {Header} from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";


const App = () => {
    return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path={"/cart"} element={<Cart/>}/>
                            <Route path={"/404"} element={<NotFound/>}/>
                            <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
    );
}

export default App;

