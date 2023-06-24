import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import "./CheckoutForm.css";


function CheckoutForm({ handleConfirm }) {
    const [buyerName, setBuyerName] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleConfirm(buyerName, buyerPhone, buyerEmail);
    };

    return (
        <div className="checkoutform-container">
            <small>Completa tu compra</small>
            <input
                placeholder="Nombre"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
            />
            <input
                placeholder="Email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
            />
            <input
                placeholder="Teléfono"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
            />
            <button onClick={handleSubmit} style={{ backgroundColor: "#03c46c" }}>
                Comprar
            </button>
        </div>
    );
}

export default CheckoutForm;
