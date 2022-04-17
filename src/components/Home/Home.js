import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCustomHook from '../../CustomHook/CustomHook';
import Service from '../Service/Service';
import './Home.css' 

const Home = () => {
    const [place, setplace] = useCustomHook();
    return (
        <div>
            {/* cerousel */}

            <section>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 image"
                            src="https://www.travelalaska.com/sites/default/files/2022-01/Haida-GlacierBay-GettyImages-1147753605.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 image"
                            src="https://alaskaprivatetouring.com/wp-content/uploads/2020/08/GiW_E37g-600x400.jpeg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src="https://cleancruising.imgix.net/destination/alaska_gallery1.jpg?auto=format&w=960"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* services  */}
            
            <section className='container'>
                <h1 className='text-primary text-center fw-bold my-5'>Services</h1>

                <div className='card-container'>
                    <div className="row g-5 justify-content-center">
                        {
                            place.slice(0, 3).map(place => <Service key={place.id} place={place}></Service>)
                        }
                    </div>
                </div>

                <Link className='text-primary text-decoration-none d-block text-center fw-bold mt-5' to="/services">More Services.....</Link>
            </section>
        </div>
    );
};

export default Home;