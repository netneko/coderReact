import '/assets/cart.svg';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '/src/context/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
  
    return totalItems === 0 ? null : (
      <Link to="/cart">
        <div className="div-cart">
          <img src="/assets/cart.svg" className="cart-icon" alt="cart-widget" />
          <h3 className="item-cant">{totalItems}</h3>
        </div>
      </Link>
    );
  };
  
  export default CartWidget;