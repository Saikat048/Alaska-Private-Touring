import React from 'react';
import photo from '../../images/photo.png';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='about container'>
                <div className='px-5'>
                    <h1>Name: Md Saikat Hossain</h1>
                    <p><b>Email</b>: mdsaikathosan048@gmail.com</p> 

                    <p>Admitted to Programming Hero to become a successful web developer InshaAllah i will one day. I want to work in a good company by developing my skills. Hard work is the key to both success and self-satisfaction. When we do hard work, we can achieve our goals, which leads to self-satisfaction. We must always remember that positivity and motivation come from hard work. When you work hard, you come one step closer to your dreams, and that gives you positivity.</p>


                    <p><b>Address</b>: Narsingdi, Dhaka</p>
                    
                </div>
                <div>
                    <img className='img' src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;