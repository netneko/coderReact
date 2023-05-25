/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import productsDB from "../../data/products";

/* AsnyMock ----------------------------------------------- */
function getItemData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB[0]);
        }, 2000);
    });
}

/* Aca tngo que hacer la funcion getItemDataById como en el video de Coder (1.38) y la tengo que llamar abajo en lugar del getItmData */
/* ------------------------------------------------ */

function ItemDetailContainer() {
    // estado
    const [product, setProduct] = useState({});

    //efecto
    useEffect(() => {
        getItemData().
        then((respuesta) => {
            setProduct(respuesta);
        })
        .catch(errror => {
            console.error(errror)
        })
    }, []);


    //UI
    return (
        /* <ItemDetail .../> */
        <div>
            <h1>Titulo: {product.title}</h1>
            <img src={product.image}></img>
            <h4>price: $ {product.category}</h4>
            <h4>price: $ {product.stock}</h4>
            <h4>price: $ {product.price}</h4>
        </div>
    );
}

export default ItemDetailContainer;