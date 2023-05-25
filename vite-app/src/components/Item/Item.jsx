import { useState } from "react";
import './Item.css'



function CardDescription({ price, category }) {
  return (
    <div className="item-card_detail">
      <h4>$ {price}</h4>
      <small>{category}</small>
    </div>
  );
}

function Item({ id,title,category ,stock,image, price,description,color }) {

  return (
    <div className="item-card">

      <div className="item-card_header">
        <h2>{title}</h2>
        <small>{category}</small>
        <h3>{stock}</h3>
      </div>
      <div className="item-card_img">
        <img src={image} alt="imagen"></img>
      </div>

      <CardDescription price={price}  />
      <ItemCount stock={5} />
      <button>Ver detalle</button>
    </div>
  );
}

export default Item;