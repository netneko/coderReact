import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase/firebaseConfig";
import CheckoutForm from '../CheckoutForm/CheckoutForm';





const Cart = () => {
    const { cart, totalItems, countTotalPrice, clearCart, removeItem, subTotalItem } = useContext(CartContext);
    const navigateTo = useNavigate();
    const [buyerName, setBuyerName] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    if (totalItems === 0) {
        return (
            <div>
                <h1>No hay items en el carrito!</h1>
                <Link to="/" className="Option">
                    Volver al listado de productos
                </Link>
            </div>
        );
    }

    async function handleConfirm() {
        const order = {
            items: cart,
            buyer: {
                name:buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            date: new Date(),
            price: countTotalPrice()
        };

        try {
            /* CON MANEJO DE STOCK
            const id = await createOrderWithStockUpdate(order);*/
            //Sin manejo de stock
            const id = await createOrder(order)
            console.log("respuesta", id);
            clearCart();
            navigateTo(`/order-confirmation/${id}`);
        } catch (error) {
            alert(error);
        }
    }


    return (
        <div>
            <h2>Tu carrito de compras</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>Subtotal: {item.quantity * item.price}</td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>X</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2">Total del carrito:</td>
                        <td colSpan="2">{countTotalPrice()}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <CheckoutForm handleConfirm={handleConfirm} />
            <button onClick={handleConfirm}>Crear orden de compra</button>
        </div>
    );



};

export default Cart;


//Me gustaria agregar los botones para agregar o restar unidades de un item
