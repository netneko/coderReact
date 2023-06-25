import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css";

//Pagina de Order confirmation o Thank you page.
//Incluye un Link para volver a la pagina ppal

function OrderConfirm() {
    const { orderid } = useParams();
    return (
        <div>
            <h1 className="thanku-message">Muchas gracias por tu compra</h1>
            <small className="orderId-message">Este es tu comprobante de compra: {orderid}</small>
            <Link to="/" className="Option">
                <button className="button-back2home">
                    Volver al listado de productos
                </button>
            </Link>
        </div>
        
    );
}

export default OrderConfirm;