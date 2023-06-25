
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDocs,doc,getDoc,collection,query,where} from  'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";
import { getItemDataById } from "../../services/firebase/firebaseConfig";


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


