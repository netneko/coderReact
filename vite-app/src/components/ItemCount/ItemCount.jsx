import React, { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, inicio, onAdd }) => {
    const [cant, setCant] = useState(inicio || 0);

    /*Funcion para incrementar el contador con validacion de que sea menor que el stock */ 
    const increment = () => {
        if (cant < stock) {
            setCant(cant + 1);
        }
    };
 /*Funcion para decrementar el contador con validacion de que sea mayor a 1 */
    const decrement = () => {
        if (cant > 1) {
            setCant(cant - 1);
        }
    };

    
    //Si el stock es 0 inhabilito el botón "agregar al carrito" y lo pongo en gris    
    const styleButton = {
        backgroundColor: stock === 0 ? "grey" : "#869d79e3"
    }

    console.log(stock)
    return (
        <div className="itemcount-container">
            <div className="itemcount-control">
                <button className="Button" onClick={decrement}>
                    -
                </button>
                <h4 className="Number">{cant}</h4>
                <button className="Button" onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button style={styleButton} className="Button-add" onClick={() => onAdd(cant)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};


//Mirar clae Context 1.25
export default ItemCount;
