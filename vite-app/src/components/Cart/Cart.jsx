import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrder } from "../../services/firebase/firebaseConfig";
import Swal from "sweetalert2";

const Cart = () => {
    const { cart, totalItems, countTotalPrice, clearCart, removeItem, subTotalItem } = useContext(CartContext);
    const navigateTo = useNavigate();

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
        /*
        1. Array con listado de items
        2. Datos del usuario (nombre,telefono,etc)
        3. timestamp o fecha
        4. Precio total de la compra (traer del Context)
         */
        const order = {
            items: cart,
            buyer: {
                name: "",
                phone: "",
                email: ""
            },
            date: new Date(),
            price: countTotalPrice()
        };

        try {
            const id = await createOrderWithStockUpdate(order);
            console.log("respuesta", id);
            clear();

            navigateTo(`/order-confirmation/${id}`);
            /* 
            1. alert: SweetAlert/toastify -> muestren el id
            2. redirección: React Router -> /confirmation
            3. rendering condicional -> modificando un state 0.46 min explica como
          */
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
            <button onClick={handleConfirm}>Crear orden de compra</button>
        </div>
    );



};

export default Cart;


//Me gustaria agregar los botones para agregar o restar unidades de un item
/* {<CheckoutForm /> Descoemntar esto al terminar de hacer la funcionalidad}
VA DEBAJO DEL CIERRE DE LA TABLA
*/