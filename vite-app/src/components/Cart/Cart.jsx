import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.css";



const Cart = () => {
    const { cart, totalItems, countTotalPrice, clearCart, removeItem } = useContext(CartContext);
    const navigateTo = useNavigate();
    const [buyerName, setBuyerName] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [error, setError] = useState("");

    // Validar campos antes de confirmar la compra
    const validateFields = () => {
        if (buyerName.trim() === "" || buyerPhone.trim() === "" || buyerEmail.trim() === "") {
            setError("Todos los campos son requeridos");
            return false;
        }

        // Validar formato de email
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
        if (!emailRegex.test(buyerEmail)) {
            setError("El formato del email no es válido");
            return false;
        }

        // Validar campo de teléfono como numérico
        if (isNaN(buyerPhone)) {
            setError("El teléfono debe ser numérico");
            return false;
        }

        setError("");
        return true;
    };


    async function handleConfirm() {
        if (!validateFields()) {
            return;
        }

        const order = {
            items: cart,
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            date: new Date(),
            price: countTotalPrice()
        };

        try {
            const id = await createOrder(order);
            clearCart();
            navigateTo(`/order-confirmation/${id}`);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <h2 className="page-title">Tu carrito de compras</h2>
            {totalItems === 0 ? (
                <div>
                    <h1>No hay items en el carrito!</h1>
                    <Link to="/" className="Option-emptycart">
                        Volver al listado de productos
                    </Link>
                </div>
            ) : (
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <button className="button-removeItem" onClick={() => removeItem(item.id)}>X</button>
                                    </td>
                                </tr>
                            ))}
                            <tr className="cart-total-row">
                                <td colSpan="2">Total del carrito:</td>
                                <td colSpan="2">{countTotalPrice()}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="cart-clear-button" onClick={clearCart}>
                        Vaciar carrito
                    </button>
                    <CheckoutForm setBuyerName={setBuyerName} setBuyerPhone={setBuyerPhone} setBuyerEmail={setBuyerEmail} error={error} />
                    {error && <p className="error-message">{error}</p>}
                    <button className="button-confirm" onClick={handleConfirm}>Crear orden de compra</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
