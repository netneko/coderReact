import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import React from "react";
import {Link, NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'>
                <h3 className="nav-title">Zucchi - Tienda de sabores</h3>
            </Link>
            <div className="nav-links">
                <ul>
                    <li className="nav-link">Sales</li>
                    <li className="nav-link">Rubs</li>
                    <li className="nav-link">Especias</li>
                </ul>
            </div>
            <CartWidget />
        </nav>

    )
}

/*Saque esto    <h3 className="nav-title">Zucchi - Tienda de sabores</h3> */
export default NavBar;