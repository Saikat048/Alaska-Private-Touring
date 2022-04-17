import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>  
            <div className='footer'>
                <div className='footer-child mx-auto'>
                    <h2>CONTACT</h2>
                    <hr className='hr'/>
                    <p>01871******</p>
                    <p>Email Me</p>
                </div>
                <div className='footer-child mx-auto'>
                    <h2>Resources</h2>
                    <hr className='hr'/>
                    <p>Booking Policies</p>
                    <p>Participation Agreement</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footer-child mx-auto'>
                    <h2>Connect</h2>
                    <hr className='hr'/>
                    <Link className='icon' to="error"><BsFacebook></BsFacebook></Link>
                    <Link className='icon' to="error"><BsInstagram></BsInstagram></Link>
                    <Link className='icon' to="error"><SiGmail></SiGmail></Link> 
                </div>
            </div> 
                <p className='text-center my-5 px-5'>Copyright © 2022 Adventure Kodiak · All rights reserved. Website by Sundog Media, LLC Logo Sundog Media, LLC.</p>
        </div>
    );
};

export default Footer;