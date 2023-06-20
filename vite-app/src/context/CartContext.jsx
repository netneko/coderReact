import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const isInCart = (itemId) => {
        return cart.some(prod =>  prod.id !== itemId)
    }

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };
    

    function countItems() {
        let total = 0;
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    function countTotalPrice() {
        // Implementar la función para calcular el precio total del carrito
    }

    function removeItem(idDelete) {
        setCart(cart.filter((item) => item.id !== idDelete));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, countItems, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
