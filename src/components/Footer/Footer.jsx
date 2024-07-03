import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
 <div className="footer-content">
    <div className="footer-content-left">
    <img src={assets.logo} alt="" />
    <p>Welcome to BiteBuddy, your go-to destination for delicious and convenient food delivery! At BiteBuddy, we offer a wide range of mouth-watering dishes from your favorite local restaurants, delivered straight to your doorstep. Whether you're craving a juicy burger, a fresh salad, or a slice of decadent cake, our diverse menu has something for everyone. With just a few clicks, you can enjoy a delightful meal in the comfort of your home. Experience the joy of great food made easy with BiteBuddy!</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-998-890-340</li>
                <li>contact@bitebuddy.com</li>
             </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © BiteBuddy.com - All Right Reserved </p>
    </div>
  )
}
