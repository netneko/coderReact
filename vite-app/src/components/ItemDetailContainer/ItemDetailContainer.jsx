
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productsDB from "../../data/products";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const getItemDataById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

/* ------------------------------------------------ */

function ItemDetailContainer(props) {
    // estado
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    /* Esto me parece que en realidad va en ItemCount
    Usamos o consumimos el Context*/

    const {cart, addItem} = useContext(CartContext)
    console.log("context:", cart);
    
    /* ESta funcion no estoy segura que vaya aca, OJO!! */
    //No lo warot llMnso nunCA!!
    //----------------------------------------------------
    function onAddToCart(count)
    {
        addItem(product, count)
        alert (`Agregaste ${count} - ${product.title} al carrito`);
    }

    useEffect(() => {
        getItemDataById(productId).then((respuesta) => {
            setProduct(respuesta);
        });
    }, [productId]);
    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product} />
        </div>
    );
}



export default ItemDetailContainer;


