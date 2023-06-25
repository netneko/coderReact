import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css";
import HomePageButton from "../HomePageButton/HomePageButton";



//Pagina de Order confirmation o Thank you page.
//Incluye un botón (componente)  para volver a la pagina ppal

function OrderConfirm() {
    const { orderid } = useParams();
    return (
        <div>
            <h1 className="thanku-message">Muchas gracias por tu compra</h1>
            <small className="orderId-message">Este es tu comprobante de compra: {orderid}</small>
            <Link to="/" className="Option">
            <HomePageButton/>
            </Link>
        </div>
        
    );
}

export default OrderConfirm;