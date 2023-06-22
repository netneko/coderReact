
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productsDB from "../../data/products";
import {getDocs,collection,query,where} from  'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";


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


