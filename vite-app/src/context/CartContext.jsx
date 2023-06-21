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

    function removeItem(idDelete) {
        setCart(cart.filter((item) => item.id !== idDelete));
    }

    const clearCart = () => {
        setCart([]);
        setTotalItems(0);
    }

    function countTotalPrice() {
        // Implementar la función para calcular el precio total del carrito
        //PROBARLA CON EL CHECKOUT
        let totalPrice = 0;
        cart.forEach((item) =>{
            const itemTotal = item.price * item.quantity;
            totalPrice = totalPrice + itemTotal;
        } );
        return totalPrice;
    }

    const cartContextValue = {
        cart,
        setCart,
        totalItems,
        addItem,
        removeItem,
        countTotalPrice,
        clearCart,
    };

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
