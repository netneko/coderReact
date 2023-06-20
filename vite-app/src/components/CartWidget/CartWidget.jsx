import '/assets/cart.svg';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '/src/context/CartContext.jsx';





const CartWidget = () =>
{
    const { countItems} = useContext(CartContext);

    return(
        <div className="div-cart">
            <img src="/assets/cart.svg" className="cart-icon" alt="cart-widget" />
            <h3 className='item-cant'>{countItems()}</h3>
        </div>
    )
}


//esta porqueria no anda el {countItems()} porque dice que no es una funcion y tiene razon
export default CartWidget;