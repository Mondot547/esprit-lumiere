import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../scss/pages/Contact.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Contact = () => {

    const [state, handlsubmit] = useForm('xjvqrozj');
    if (state.succeeded) {
        return (
            <div className='Redirection container position-relative p-5 border border-success rounded'>
                <div className="container w-50 d-flex justify-content-center align-items-center flex-column">
                    <h1 className='fs-1 text-success'>Merci !</h1>
                    <article className="container-fluid text-center p-3 mt-3">
                        <p>Je vous répondrai dans les plus bref délais.</p>
                        <br />
                        <p>Cordialement, Monsieur Mondot Alexandre</p>
                    </article>
                </div>
                <span>Retour à l'<Link to='/'>acceuil</Link></span>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="Spacing"></div>
                <section className='Form border border-success rounded w-75 m-auto p-5'>
                    <h1 className='text-center'>Contactez-moi</h1>
                    <form onSubmit={handlsubmit} className='container '>
                        <div className="GroupName d-flex justify-content-center flex-column flex-md-row">
                            <div className="form-floating mb-3 me-md-3">
                                <input type="text" className="form-control" id="floatingName name" name='name' placeholder="John Doe" required />
                                <ValidationError prefix='Name' field='name' errors={state.errors} />
                                <label htmlFor="floatingName">Nom/Prénom</label>
                            </div>
                            <div className="form-floating mb-3 w-100">
                                <input type="email" className="form-control me-2" id="floatingMail" placeholder="name@example.com" name='email' required />
                                <ValidationError prefix='Email' field='email' errors={state.errors} />
                                <label htmlFor="floatingMail">Adresse Mail</label>
                            </div>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea message" rows='4' name='message' required></textarea>
                            <ValidationError prefix="Message" field='message' errors={state.errors} />
                            <label htmlFor="floatingTextarea">Message</label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input class="btn btn-outline-primary mt-3" type="submit" disabled={state.submitting} value="Envoyer"></input>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;