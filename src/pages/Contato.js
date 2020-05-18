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

    const lang = 'PT';

    function handleFormSubmit(e) {
        e.preventDefault();

        const data = {
            lang,
            name,
            email,
            phone,
            message,
        };

        $('.button-mailing').html('Enviando sua mensagem... <i class="fas fa-spinner fa-spin"></i>')

        $.ajax({
            url:'https://andressa-awakeningminds.com/mail/envia.php',
            type:'POST',
            data:data,
            success:function(data){
                console.log(data);
                $('.button-mailing').addClass('button-mailing-ok');
                $('.button-mailing').html('Mensagem enviada :) <i class="fas fa-check"></i>');

                setName('');
                setEmail('');
                setPhone('');
                setMessage('');

                setTimeout(function(){ $('.button-mailing').html('Enviar'); }, 2000);
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Contato - Awakening Minds</title>
                <meta name="description" content="Entre em contato para conversarmos e fazermos sua primeira avaliação gratuita." />
            </Helmet>

            <div className="bg-contato-holder" style={{ marginTop: 120 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 text-center">
                            <p>Entre em contato para conversarmos e fazermos sua primeira avaliação gratuita. Basta preencher os campos abaixo ou enviar um e-mail diretamente para <a href="mailto:am@andressa-awakeningminds.com">am@andressa-awakeningminds.com</a></p>
                        </div>

                        <div className="col-12 contato">
                            <h2>Contato</h2>
                        </div>

                        <div className="col-12 col-md-3 endereco">
                            <span className="title">Endereço Dubai</span>
                            <p>Dubai Marina - Dubai<br/> United Arab Emirates.</p>

                            <span className="title">Endereço Brasil</span>
                            <p>Trindade - Florianópolis,<br/> Santa Catarina<br/> Brasil</p>

                            <span className="title">Telefone</span>
                            <p>+971 55 2586276</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <form onSubmit={handleFormSubmit}>
                                <div className="input-block">
                                    <input 
                                        name="nome" 
                                        id="nome" 
                                        placeholder="Nome"
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
                                        placeholder="Telefone" 
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="input-block text-center">
                                    <textarea 
                                        name="" 
                                        id="" 
                                        placeholder="Mensagem"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    ></textarea>

                                    <button className="button-default button-mailing">Enviar</button>
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
