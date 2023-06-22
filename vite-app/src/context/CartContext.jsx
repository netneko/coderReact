import { createContext, useState } from "react";


export const CartContext = createContext({ cart: [], totalItems: 0 });

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            // El producto no está en el carrito, lo agrega
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            // El producto ya está en el carrito, actualiza la cantidad
            setCart((prev) =>
                prev.map((prod) =>
                    prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                )
            );
        }
        setTotalItems((prevTotal) => prevTotal + quantity);
    };

    //Remover un item especifico del carrito
    function removeItem(idDelete) {
        setCart(cart.filter((item) => item.id !== idDelete));
    }

    //Vaciar carrito
    const clearCart = () => {
        setCart([]);
        setTotalItems(0);
    }

    //Esta funcion es para calcular el importe TOTAL de todo el carrito
    function countTotalPrice() {
        const totalPrice = cart.reduce((accumulator, item) => {
            const itemTotal = item.price * item.quantity;
            return accumulator + itemTotal;
        }, 0);
        return totalPrice;
    }

    // Esta funcion es para calcular el subTotal de cada producto
    function subTotalItem() {
        let totalPrice = 0;
        cart.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            totalPrice = totalPrice + itemTotal;
        });
        return totalPrice;
    }


    const cartContextValue = {
        cart,
        setCart,
        totalItems,
        addItem,
        removeItem,
        countTotalPrice,
        subTotalItem,
        clearCart,
    };

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
