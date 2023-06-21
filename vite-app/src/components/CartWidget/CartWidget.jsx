import '/assets/cart.svg';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '/src/context/CartContext.jsx';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
  
    return (
      <div className="div-cart">
        <img src="/assets/cart.svg" className="cart-icon" alt="cart-widget" />
        <h3 className="item-cant">{totalItems}</h3>
      </div>
    );
  };
  
  export default CartWidget;