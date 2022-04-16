import React from 'react';
import useCustomHook from '../../CustomHook/CustomHook';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [plases, setPlases] = useCustomHook()
    return (
        <div className='container'>
            <div className='row g-5 justify-content-center'>
                {
                    plases.map(plase => <Service key={plase.id} plase={plase}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;