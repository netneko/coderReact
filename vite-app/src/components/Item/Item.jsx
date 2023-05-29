import { useState } from "react";
import './Item.css'
import { Link } from "react-router-dom";




function CardDescription({ price, category }) {
  return (
    <div className="item-card_detail">
      <h4>$ {price}</h4>
      <small>{category}</small>
    </div>
  );
}

function Item({ id, title, category, stock, image, price, description, color }) {

  return (
    <div className="container">
      <div className="item-card">
        <div className="item-card_header">
          <h2 className="cardTitle">{title}</h2>
          <small>{category}</small>
        </div>
        <div className="item-card_img">
          <img src={image} alt="imagen"></img>
        </div>

        <CardDescription price={price} />
        <footer>
          <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </footer>
      </div>
    </div>

  );
}

export default Item;

