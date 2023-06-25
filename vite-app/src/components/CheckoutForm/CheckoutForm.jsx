import React from "react";
import "./CheckoutForm.css";

function CheckoutForm({ setBuyerName, setBuyerPhone, setBuyerEmail }) {
    return (
        <div className="checkoutform-container">
            <small className="form-title">Completa tu compra</small>
            <input
                placeholder="Nombre"
                onChange={(e) => setBuyerName(e.target.value)}
            />
            <input
                placeholder="Email"
                onChange={(e) => setBuyerEmail(e.target.value)}
            />
            <input
                placeholder="Teléfono"
                onChange={(e) => setBuyerPhone(e.target.value)}
            />
        </div>
    );
}

export default CheckoutForm;
