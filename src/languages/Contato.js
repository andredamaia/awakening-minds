import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import $ from 'jquery';

import '../styles/Contato.css';

import iconfacebook from '../assets/icon-facebook.png';
import iconinstagram from '../assets/icon-instagram.png';
import iconwhats from '../assets/icon-whats.png';
import ig from '../assets/ig.png';

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const lang = 'en';

    function handleFormSubmit(e) {
        e.preventDefault();

        const data = {
            lang,
            name,
            email,
            phone,
            message,
        };

        $('.button-mailing').html('Sending your message... <i class="fas fa-spinner fa-spin"></i>')

        $.ajax({
            url:'https://andressa-awakeningminds.com/mail/enviar.php',
            type:'POST',
            data:data,
            success:function(data){
                console.log(data);
                $('.button-mailing').addClass('button-mailing-ok');
                $('.button-mailing').html('Message sent :) <i class="fas fa-check"></i>');

                setName('');
                setEmail('');
                setPhone('');
                setMessage('');

                setTimeout(function(){ $('.button-mailing').html('Send'); }, 2000);
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Contact - Awakening Minds</title>
                <meta name="description" content="Get in touch for us to talk and schedule your free assessment" />
            </Helmet>

            <div className="bg-contato-holder" style={{ marginTop: 120 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 text-center">
                            <p>Get in touch to schedule your online session filling in the contact box below or send an email to: <a href="mailto:am@andressa-awakeningminds.com">am@andressa-awakeningminds.com</a></p>
                        </div>

                        <div className="col-12 contato">
                            <h2>Contact</h2>
                        </div>

                        <div className="col-12 col-md-3 endereco">
                            <span className="title">Address in Dubai</span>
                            <p>Dubai Marina - Dubai<br/> United Arab Emirates.</p>

                            <span className="title">Address in Brazil</span>
                            <p>Trindade - Florianópolis,<br/> Santa Catarina<br/> Brasil</p>

                            <span className="title">Telephone:</span>
                            <p>
                                <a href="https://api.whatsapp.com/send?phone=971552586276" rel="noopener noreferrer" class="link-whats" target="_blank">+971 55 2586276</a> <br />
                                <a href="https://api.whatsapp.com/send?phone=5541997230507" rel="noopener noreferrer" class="link-whats" target="_blank">+55 41 997230507</a>
                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <form onSubmit={handleFormSubmit}>
                                <div className="input-block">
                                    <input 
                                        name="nome" 
                                        id="nome" 
                                        placeholder="Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="input-block">
                                    <input 
                                        type="email"
                                        name="email" 
                                        id="email" 
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="input-block">
                                    <input 
                                        name="telefone" 
                                        id="telefone" 
                                        placeholder="Telephone" 
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="input-block text-center">
                                    <textarea 
                                        name="" 
                                        id="" 
                                        placeholder="Message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    ></textarea>

                                    <button className="button-default button-mailing">Send</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <a href="https://www.instagram.com/andressa_mokesinski/" target="_blank" rel="noopener noreferrer">
                                <img src={ig} style={{ maxWidth: '100%' }} alt="" />
                            </a>
                        </div>

                        <div className="col-12 text-center copyright-holder">
                            <a href="https://www.facebook.com/andressaawakeningminds/" target="_blank" rel="noopener noreferrer"><img src={iconfacebook} alt="" /></a>
                            <a href="https://www.instagram.com/andressa_mokesinski/" target="_blank" rel="noopener noreferrer"><img src={iconinstagram} alt="" /></a>
                            <a href="https://api.whatsapp.com/send?phone=+971552586276" target="_blank" rel="noopener noreferrer"><img src={iconwhats} alt="" /></a>

                            <p className="copyright">
                                @ 2020 Awakening Minds. All rights reserved. Terms and condictions. Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
