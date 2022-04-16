import React from 'react'; 

const Service = (props) => {
    const { name, img } = props.place;
    return (
        <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-4 me-5 pt-3" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <button href="#" class="btn btn-primary mb-1">Go somewhere</button>
        </div>
    );
};

export default Service;