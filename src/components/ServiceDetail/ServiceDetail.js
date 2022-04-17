import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomHook from '../../CustomHook/CustomHook';

const ServiceDetail = () => {
    const { serviceId } = useParams(); 
    return (
        <div>
            <h2 className='text-primary text-center fw-bold mt-5'>Service Detail</h2>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 me-5 pt-3" style={{ width: "18rem" }}>
                <img src={serviceId.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceId.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div> 
            </div>
        </div>
    );
};

export default ServiceDetail;