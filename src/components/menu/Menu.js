import './menu.scss';
import {Link} from 'react-router-dom';

function Menu({menuOpen, setMenuOpen}) {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <Link to='/'>
                    <li className="effect-underline" onClick={() => setMenuOpen(false)}>
                        About
                    </li>
                </Link>

                <Link to='/portfolio'>
                    <li className="effect-underline" onClick={() => setMenuOpen(false)}>
                        Portfolio
                    </li>

                </Link>
            </ul>

        </div>
    );
}

export default Menu;