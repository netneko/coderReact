import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import {getDocs,collection,query,where} from  'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";

/* AsyncMock - servicioMock  */
import productsDB from "../../data/products";
import ItemList from "../ItemList/ItemList";

/*Navegacion*/
import { useParams } from "react-router-dom";


/*Esto podria ponerlo dentro del archivo de products.js tambien pero como lo vimos en clase asi prfiero dejarlo aca
ESTA FUNCION VOY A REEMPLAZARLA EN firebaseConfig*/
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