import Item from "../Item/Item";
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock  */
import productsDB from "../../data/products";
import ItemList from "../ItemList/ItemList";

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB);
        }, 2000);
    });
}
/* ---------------------------------------------- */

function ItemListContainer() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        getData().then((respuesta) => {
            console.log("llegaron los datos", respuesta);
            setProducts(respuesta);
        });
    }, []);

    return <ItemList products={products} />;
}

export default ItemListContainer;