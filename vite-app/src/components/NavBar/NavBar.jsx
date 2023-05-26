import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import React from "react";
import {Link,NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'>
                <h3 className="nav-title">Zucchi - Tienda de sabores</h3>
            </Link>
            <div className="nav-links">
                        <NavLink to={`/category/Sales`} style={{ color: '#fafafa' , marginRight:'1rem'}} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Sales</NavLink>
                        <NavLink to={`/category/Rubs`} style={{ color: '#fafafa' ,marginRight:'1rem'}} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Rubs</NavLink>
                        <NavLink to={`/category/Especias`} style={{ color: '#fafafa',marginRight:'1rem' }} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Especias</NavLink>
            </div>
            <CartWidget />
        </nav>

    )
}


export default NavBar;