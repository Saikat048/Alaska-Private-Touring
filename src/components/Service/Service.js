import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Service = (props) => { 
    const { name, img, id, duration, price, view} = props.place; 


    //navigate service detail 

    const navigate = useNavigate(); 

    const handleChickout = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div className="card me-5 col-xs-12 col-sm-4 col-md-4 col-lg-4 shadow-sm p-3 mb-5 bg-body rounded" style={{ width: "20rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{duration}</p>
                <p>Price: {price}</p>
                <p className="card-text">{view}</p>
            </div>
            <button onClick={() => handleChickout(id)} href="#" className="btn btn-primary mb-1">Chick Out</button>
        </div>
    );
};

export default Service;