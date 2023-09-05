import React from 'react';
import { Link } from 'react-router-dom';
import arbre from '../assets/arbre.webp';
import '../scss/components/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-secondary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/">E.S</Link>
                <img src={arbre} className="Arbre rounded-circle text-success img-thumbnail" id="offcanvasNavbarLabel" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-body-secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-success" id="offcanvasNavbarLabel">Esprit-Lumiere</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" aria-current="page" to="/">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="/about">À propos</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-danger mb-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Soin
                                    </a>
                                    <ul className="dropdown-menu border border-danger">
                                        <li><Link className="dropdown-item text-primary" to="/massageAyurvedique">Massage ayurvédique</Link></li>
                                        <li><Link className="dropdown-item text-primary" to="/soinEnergetique">Soin Énergétique</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <span className='d-flex mt-5 justify-content-center'>
                            <img src={arbre} className='img-thumbnail rounded-circle m-2 w-75' alt="arbre aux couleur pastel" />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;