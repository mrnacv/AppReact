import './Footer.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">

            <nav>
                <ul className="nav-list social-list">
                    <li>
                        <a
                            href="https://wa.me/5491128347576?text=Hola,%20quiero%20consultar%20por%20un%20producto"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://instagram.com/tuusuario"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram className="instagram-icon" />
                        </a>
                    </li>
                </ul>
            </nav>

            <p className="footer-author">
                Sitio desarrollado por Mariano
            </p>

        </footer>
    );
};