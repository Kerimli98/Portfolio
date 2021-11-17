import Contact from "./components/contact/Contact";
import "./reset.css"
import Topbar from "./components/topbar/Topbar";
import './App.scss';
import {useState} from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import ContactPage from "./components/contact-page/ContactPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            <div className="App">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Switch>
                    <Route path="/" exact component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={ContactPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
