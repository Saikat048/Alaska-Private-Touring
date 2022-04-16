import React from 'react';
import useCustomHook from '../../CustomHook/CustomHook';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [places, setplaces] = useCustomHook()
    return (
        <div className='container'>
            <div className='row g-5 justify-content-center'>
                {
                    places.map(place => <Service key={place.id} place={place}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;