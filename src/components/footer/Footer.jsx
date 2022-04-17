import React from 'react'
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>WESCAFER</a>
            <ul className='permalinks'>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#about'>Acerca de</a></li>
                <li><a href='#experience'>Experiencias</a></li>
                <li><a href='#services'>Servicios</a></li>
                <li><a href='#portfolio'>Portafolio</a></li>
                <li><a href='#testimonials'>Testimonio</a></li>
                <li><a href='#contact'>Contacto</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://instagram.com'><FiInstagram /></a>
                <a href='https://twitter.com'><IoLogoTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; WESCAFER Originals. Todos los Derechos Reservados</small>
            </div>
        </footer>
    );
};
export default Footer;