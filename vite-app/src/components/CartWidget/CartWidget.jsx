import '/assets/cart.svg';
import './CartWidget.css'

const CartWidget = () =>
{
    return(
        <div className="div-cart">
            <img src="/assets/cart.svg" className="cart-icon" alt="cart-widget" />
            <h3 className='item-cant'>0</h3>
        </div>
    )
}

export default CartWidget;