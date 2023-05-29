import "./ItemListContainer.css";
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock  */
import productsDB from "../../data/products";
import ItemList from "../ItemList/ItemList";

/*Navegacion*/
import { useParams } from "react-router-dom";


/*Esto podria ponerlo dentro del archivo de products.js tambien pero como lo vimos en clase asi prfiero dejarlo aca*/
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
    const { categoryid } = useParams();

    useEffect(() => {
        getData().then((respuesta) => {
            if (categoryid) {
                const filterProducts = respuesta.filter(
                    (item) => item.category === categoryid
                );
                setProducts(filterProducts);
            } else {
                setProducts(respuesta);
            }
        });
    }, [categoryid]);

    return <ItemList products={products} />;
}



export default ItemListContainer;