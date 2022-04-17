import React from 'react';
import useCustomHook from '../../CustomHook/CustomHook';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [places, setplaces] = useCustomHook()
    return (
        <div>
            <div className='container'>
                <div className='row g-5 justify-content-center'>
                    {
                        places.map(place => <Service key={place.id} place={place}></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;