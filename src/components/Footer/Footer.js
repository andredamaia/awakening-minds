import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

import './styles.css';

import iconfacebook from '../../assets/icon-facebook.png';
import iconinstagram from '../../assets/icon-instagram.png';
import iconwhats from '../../assets/icon-whats.png';
import ig from '../../assets/ig.png';

function Footer() {
    let location = useLocation();

    useEffect(() => {

    }, [location]);

    function usePageViews() {
        useEffect(() => {

        }, []);
    }

    usePageViews();

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

    return(
        <>
            <div className={ location.pathname === '/pt/contato' ? "d-none" : "bg-contato lang-pt" }>
                <div className="container">
                    <div className="row">
                        <div className="col-12 contato">
                            <h2>Contact</h2>
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

                        {/* <div className="col-12 col-md-3">
                            <div>
                                <div>
                                    <span className="depoimento">Eu encontrei a minha melhor versão depois do tratamento, me sentindo mais completo e saudável.</span>

                                    <span className="author">
                                        <strong>Fulano de tal</strong>
                                        Cargo
                                    </span>
                                </div>
                            </div>
                        </div> */}

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
                                @ 2020 Awakening Minds. All rights reserved. Terms and condictions. Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;