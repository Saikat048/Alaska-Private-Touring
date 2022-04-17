import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCustomHook from '../../CustomHook/CustomHook';
import Service from '../Service/Service';
import './Home.css' 
import { BsArrowRight } from 'react-icons/bs';
import Footer from '../Footer/Footer';

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
                        <Carousel.Caption className='carousel'>
                            <h3 className='welcome'>WELCOME TO YOUR NEXT</h3>
                            <h1 className='adventure'>ADVENTURE</h1>
                            <p className='luxury'>Alaska Luxury Escapes. Designed Just For You</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 image"
                            src="https://alaskaprivatetouring.com/wp-content/uploads/2020/08/GiW_E37g-600x400.jpeg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className='carousel'>
                            <h1 className='adventure'>ALASKA LUXURY TOUR</h1>
                            <p className='luxury'>This luxurious 2-week Alaska journey takes you deep into the Inside Passage,</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src="https://cleancruising.imgix.net/destination/alaska_gallery1.jpg?auto=format&w=960"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='carousel'>
                            <h1 className='adventure'>ALASKA SELF DRIVE TOUR</h1>
                            <p className='luxury'>Paddle your canoe through the calm deep waters of Mendenhall Lake</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* services  */}
            
            <section className='container mb-5'>
                <h1 className='text-primary text-center fw-bold my-5'>Services</h1>

                <div className='card-container'>
                    <div className="row g-5 justify-content-center">
                        {
                            place.slice(0, 3).map(place => <Service key={place.id} place={place}></Service>)
                        }
                    </div>
                </div>

                <Link className='text-primary text-decoration-none d-block text-center fw-bold mt-5' to="/services">More Services <span><BsArrowRight></BsArrowRight></span></Link>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;