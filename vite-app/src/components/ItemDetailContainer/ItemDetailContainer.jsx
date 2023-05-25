/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import productsDB from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

/* AsnyMock ----------------------------------------------- 
function getItemData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB[0]);
        }, 2000);
    });
}*/

export const getItemDataById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB.find(prod => prod.id === productId))
        }, 500)
    })
}

/* Aca tngo que hacer la funcion getItemDataById como en el video de Coder (1.38) y la tengo que llamar abajo en lugar del getItmData */
/* ------------------------------------------------ */

function ItemDetailContainer(props) {
    // estado
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getItemDataById(productId).then((respuesta) => {
            setProduct(respuesta);
        });
    }, [productId]);


    //UI
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />

        </div>
    );
}

export default ItemDetailContainer;

/*Estoy hardcodeando el stock por ahora*/