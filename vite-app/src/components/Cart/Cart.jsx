import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalItems, countTotalPrice, clearCart, removeItem, subTotalItem } = useContext(CartContext);

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
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total del carrito:</td>
                        <td colSpan="2">{countTotalPrice()}</td>
                        <button onClick={()=> clearCart()}> Vaciar carrito</button>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;


//Me gustaria agregar los botones para agregar o restar unidades de un item