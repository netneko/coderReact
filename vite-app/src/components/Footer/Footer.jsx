import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3 className="footer-direccion">
                    Av Siempre Viva 742
                </h3>
                <div className="footer-madeBy"> Made with &#9829; by Ceci Zuki</div>
                <div className="socialmedia-links">
                    <a href="https://www.facebook.com/tu_perfil_de_facebook" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com/tu_perfil_de_twitter" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/tu_perfil_de_instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
