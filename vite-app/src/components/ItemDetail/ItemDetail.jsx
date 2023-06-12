import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
   const [cantAgregada, setCantAgregada] = useState(0)

    const handleonAdd = (cantidad) => {
        setCantAgregada(cantidad)
    }

    return (
        <div className="card-container">
            <div className="card-image">
                <img src={product?.image} className='card-img' alt={product.title} />
            </div>
            <div className="card-detail">
                <h1 className='card-title'>{product?.title}</h1>
                <h3 className='card-category'>{product.category}</h3>
                <h2 className='card-price'>{'$'}{product.price}</h2>
                <small className='card-detail'>{product.description}</small>
                <div className="card-cant">
                    {
                        cantAgregada > 0 ? (
                            <Link to='/cart' className='Option'>
                                <button className='Button-fin'>Finalizar compra</button>
                            </Link>
                        ) : (
                            <ItemCount inicio={1} stock={10} onAdd={handleonAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
