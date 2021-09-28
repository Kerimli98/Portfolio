import './menu.scss'
import React from 'react';

function Menu({menuOpen, setMenuOpen}) {

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">About</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;