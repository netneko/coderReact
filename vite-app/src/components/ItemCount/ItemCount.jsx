import React, { useState } from "react";

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


    return (
        <div className="Contador">
            <div className="Controles">
                <button className="Button" onClick={decrement}>
                    -
                </button>
                <h4 className="Number">{cant}</h4>
                <button className="Button" onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(cant)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
