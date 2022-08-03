import "./reset.css"
import Topbar from "./components/topbar/Topbar";
import './App.scss';
import {useState} from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import { Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className="App">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                </Switch>
            </AnimatePresence>
        </div>

    );
}

export default App;
