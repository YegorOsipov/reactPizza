import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Sort} from "./components/Sort/Sort";
import {Categories} from "./components/Categories/Categories";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock title={"Мексинканская"} price={450}/>
                        <PizzaBlock title={"Цезарь"} price={550}/>
                        <PizzaBlock title={"Пеперони"} price={400}/>
                        <PizzaBlock title={"Маргарита"} price={350}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

