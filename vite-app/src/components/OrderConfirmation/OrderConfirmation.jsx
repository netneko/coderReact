import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";

function OrderConfirm() {
    const { orderid } = useParams();
    return (
        <div>
            <h1>Muchas gracias por tu compra!</h1>
            <small>Este es tu comprobante de compra: {orderid}</small>
        </div>
    );
}

export default OrderConfirm;

/*
 Agregar mas info de la compra. Como cuando va a llegar, producto, total,etc


import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

function OrderConfirm() {
    const { orderid } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const ordersCollectionRef = collection(db, "orders");
                const q = query(ordersCollectionRef, where("orderid", "==", orderid));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const orderData = querySnapshot.docs[0].data();
                    setOrder(orderData);
                }
            } catch (error) {
                console.log("Error buscando la orden de compra:", error);
            }
        };

        fetchOrder();
    }, [orderid]);

    if (!order) {
        return <div>Loading...</div>; // Opcional: Muestra un mensaje de carga mientras se obtiene la orden
    }

    return (
        <div>
            <h1>Muchas gracias por tu compra, {order.customerName}!</h1>
            <small>Este es tu comprobante de compra: {orderid}</small>
            <p>Total de la compra: {order.totalAmount}</p>
        </div>
    );
}

export default OrderConfirm;




*/