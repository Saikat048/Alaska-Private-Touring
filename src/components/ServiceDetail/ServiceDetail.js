import React from 'react';
import { useParams } from 'react-router-dom'; 

const ServiceDetail = () => {
    const { serviceId } = useParams(); 
    return (
        <div>
            <h2 className='text-primary text-center fw-bold mt-5'>Service Detail</h2>
            <div className="card  me-5 pt-3" style={{ width: "20rem" }}>
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