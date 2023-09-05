import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='pt-3 text-center'>
                <h1 className='mt-5'>Acceuil</h1>
                <p>Page en cours de construction, merci de votre compréhension !</p>
            </main>
            <Footer />
        </>
    );
};

export default Home;