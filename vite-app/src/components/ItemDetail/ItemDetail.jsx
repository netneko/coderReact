import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';




function ItemDetail({ product }) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={product?.image} className='card-img' alt={product.title} />
            </div>
            <div className="card-detail">
                <h1 className='card-title'>{product?.title}</h1>
                <h3 className='card-category'>{product.category}</h3>
                <h2 className='card-price'>$ {product.price}</h2>
                <small className='card-detail'>{product.description}</small>
                <div className="card-cant">
                    <ItemCount inicio={1} stock={10} onAdd={(cant) => console.log('Cantidad agregada!', cant)} />
                </div>
            </div>
        </div>
    );
    console.log(product);
}

export default ItemDetail;

