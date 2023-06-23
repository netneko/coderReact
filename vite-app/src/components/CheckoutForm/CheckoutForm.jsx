import "./checkoutform.css";

function CheckoutForm() {
    return (
        <div className="checkoutform-container">
            <small>Completa tu compra</small>
            <input placeholder="Nombre" />
            <input placeholder="Email" />
            <input placeholder="Teléfono" />
            <button color="#03c46c">Comprar</button>
        </div>
    );
}

export default CheckoutForm;