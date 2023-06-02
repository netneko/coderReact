import { useState } from "react";
import './Item.css'
import { Link } from "react-router-dom";


function Item({ id, title, category, stock, image, price, description, color }) {
  return (
    <div className="item-container">
      <div className="item-card">
        <div className="item-card-header">
          <h2 className="cardTitle">{title}</h2>
          <h3 className="item-category">{category}</h3>
        </div>
        <div className="item-card_img">
          <img src={image} alt="imagen"></img>
        </div>
        <h3 className="item-price">
          {'$'}{price}
        </h3>
        <footer>
          <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </footer>
      </div>
    </div>

  );
}

export default Item;
