import React from 'react';
import photo from '../../images/photo.png';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='about container'>
                <div>
                    <h1>Name: Md Saikat Hossain</h1>
                    <p>Email: mdsaikathosan048@gmail.com</p>
                    <p>Phone: 01871******</p>
                    <p>Address: Narsingdi, Dhaka</p>
                    
                </div>
                <div>
                    <img className='img-fluid img' src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;