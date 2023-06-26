import React from "react";
import './HomePageButton';
import { Link } from "react-router-dom";

const HomePageButton = () => {
    return (
        <Link to="/" className="Option-emptycart">
            <button className="button-back2home"> Volver al listado de productos</button>
        </Link>
)
}

export default HomePageButton;
