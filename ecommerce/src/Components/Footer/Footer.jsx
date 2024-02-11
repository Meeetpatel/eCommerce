import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import insta from "../Assets/instagram_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import pinterest from "../Assets/pintester_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt=''></img>
        <p>SHOPOHOLIC</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className="footer-icons-container">
            <img src={insta} alt=''></img>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt=''></img>
         </div>
        <div className="footer-icons-container">
            <img src={pinterest} alt=''></img>
        </div>
        </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2024 - ALL RIGHTS RESERVED</p>
      </div>
     
    </div>
  )
}

export default Footer
