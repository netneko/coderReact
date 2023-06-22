import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function ItemDetail({ product}) {
    const { cart, addItem } = useContext(CartContext); // Mover esta línea dentro del cuerpo del componente

    const [quantityAdded,setQuantityAdded] = useState(0);

    const handleonAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id: product.id,
            title: product.title,
            price: product.price,
        };

        addItem(item, quantity);
    };

    console.log(cart);

    return (
        <div className="card-container">
            <div className="card-image">
                <img src={product?.image} className="card-img" alt={product.title} />
            </div>
            <div className="card-detail">
                <h1 className="card-title">{product?.title}</h1>
                <h3 className="card-category">{product.category}</h3>
                <h2 className="card-price">{'$'}{product.price}</h2>
                <small className="card-detail">{product.description}</small>
                <div className="card-cant">
                    {quantityAdded> 0 ? (
                        <Link to="/cart" className="Option">
                            <button className="Button-fin">Finalizar compra</button>
                        </Link>
                    ) : (
                        <ItemCount inicio={1} stock={product.stock} onAdd={handleonAdd} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
