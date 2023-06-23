import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";
import { getData ,getCategoryData} from "../../services/firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


/* AsyncMock - servicioMock  */
//import productsDB from "../../data/products";




/*Esto podria ponerlo dentro del archivo de products.js tambien pero como lo vimos en clase asi prfiero dejarlo aca
ESTA FUNCION VOY A REEMPLAZARLA EN firebaseConfig
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDB);
        }, 2000);
    });
}
*/
/* ---------------------------------------------- */

function ItemListContainer() {
    let [isLoading, setIsLoading] = useState(true);
    let [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    const fetchData = categoryid === undefined ? getData : getCategoryData;

    useEffect(() => {
        fetchData(categoryid)
            .then((respuesta) => setProducts(respuesta))
            .finally(() => {
                setIsLoading(false);
            });
    }, [categoryid]);

    return <ItemList products={products} />;
}

export default ItemListContainer;