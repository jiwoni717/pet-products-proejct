import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer"; // ==RequestMapping
import GoodsList from "./goods/GoodsList";
import GoodsDetail from "./goods/GoodsDetail";
import GoodsFind from "./goods/GoodsFind";

function App() {
    return(
        <Router>
            <Header/>
            <div className={"container"}>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"/goods/goods_list"} element={<GoodsList/>}/>
                    <Route path={"/goods/goods_detail/:user_id"} element={<GoodsDetail/>}/>
                    <Route path={"/goods/goods_find/:fd"} element={<GoodsFind/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    )
}

export default App;
