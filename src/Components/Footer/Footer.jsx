import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'







const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt=" error loading" />
                <p>WearNWalk</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>

            </ul>

            <div className="social-icons">

                <div className="icon-container">
                    <img src={instagram} alt="error loading" />
                </div>

                <div className="icon-container">
                    <img src={pintester} alt="error loading" />

                </div>

                <div className="icon-container">
                    <img src={whatsapp} alt="error loading" />
                </div>



            </div>

            <div className="footer-copyright">
                <p>@copyright 2025 - all right reserved</p>

            </div>


        </div>
    )
}

export default Footer