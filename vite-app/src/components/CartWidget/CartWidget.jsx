import '/assets/cart.svg';
import './CartWidget.css'

const CartWidget = () =>
{
    return(
        <div className="div-cart">
            <img src="/assets/cart.svg" className="cart-icon" alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget;