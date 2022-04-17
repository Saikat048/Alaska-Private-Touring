import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Service = (props) => { 
    const { name, img, id} = props.place; 

    const navigate = useNavigate();

    const handleServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="card me-5 col-xs-12 col-sm-4 col-md-4 col-lg-4 shadow-sm p-3 mb-5 bg-body rounded" style={{ width: "20rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <button onClick={() => handleServiceDetail(id)} href="#" className="btn btn-primary mb-1">Go somewhere</button>
        </div>
    );
};

export default Service;