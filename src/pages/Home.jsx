import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import massage from '../assets/accessoireMassage.jpg';
import shiatsu from '../assets/cardShiatsu.jpg';
import '../scss/pages/Home.scss';

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='pt-3 text-center container-fluid'>
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={massage} className="secondImg d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={shiatsu} className="firstImg d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block mb-0 px-2 bg-secondary-subtle rounded">
                                <h5 className='text-uppercase'>Pour les particuliers</h5>
                                <p>Des massages individualisés et adaptés à vos besoins.</p>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h1 className='mt-5'>Accueil</h1>
                <p>Page en cours de construction, merci de votre compréhension !</p>
            </main>
            <Footer />
        </>
    );
};

export default Home;