import './menu.scss';
import {Link} from 'react-router-dom';

function Menu({menuOpen, setMenuOpen}) {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <Link to='/'>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href ="#" className="effect-underline">
                            About
                        </a>
                    </li>
                </Link>

                <Link to='/portfolio'>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#" className="effect-underline">
                            Portfolio
                        </a>
                    </li>

                </Link>
            </ul>

        </div>
    );
}

export default Menu;