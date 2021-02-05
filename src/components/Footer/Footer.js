import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import { FaWhatsapp } from "react-icons/fa";

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

    const lang = 'pt';

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
            url:'https://andressa-awakeningminds.com/mail/enviar.php',
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
            <a 
                href="https://wa.me/971552586276" 
                style={{ position:'fixed', width: 60, height: 60, bottom: 30, right: 30, background: '#25d366', color:'#fff', borderRadius: 50, textAlign: 'center', fontSize: 30, boxShadow: '1px 1px 2px #888', zIndex: 3000 }} 
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp style={{ marginTop: 8 }} />
            </a>

            <div className={ location.pathname === '/pt/contato' ? "d-none" : "bg-contato lang-pt" }>
                <div className="container">
                    <div className="row">
                        <div className="col-12 order-2 order-md-1 contato">
                            <h2>Contato</h2>
                        </div>

                        <div className="col-12 col-md-3 order-3 order-md-1 endereco">
                            <span className="title">Endereço Dubai</span>
                            <p>Dubai Marina - Dubai<br/> United Arab Emirates.</p>

                            <span className="title">Endereço Brasil</span>
                            <p>Trindade - Florianópolis,<br/> Santa Catarina<br/> Brasil</p>

                            <span className="title">Telefone</span>
                            <p>
                                <a href="https://api.whatsapp.com/send?phone=971552586276" rel="noopener noreferrer" class="link-whats" target="_blank">+971 55 2586276</a> <br />
                                <a href="https://api.whatsapp.com/send?phone=5541997230507" rel="noopener noreferrer" class="link-whats" target="_blank">+55 41 997230507</a>
                            </p>
                        </div>

                        <div className="col-12 col-md-6 order-4 order-md-3">
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

                        <div className="col-12 col-md-3 order-1 order-md-4">
                            <iframe 
                                src="https://andressa-awakeningminds.com/depoimentos/pt.php" 
                                width="100%" 
                                height="700" 
                                frameBorder="0"
                                title="Testimonials"
                            ></iframe>
                        </div>

                        {/* <div className="col-12 col-md-3 text-center">
                            <a href="https://www.instagram.com/andressa_mokesinski/" target="_blank" rel="noopener noreferrer">
                                <img src={ig} style={{ maxWidth: '100%' }} alt="" />
                            </a>
                        </div> */}

                        <div className="col-12 order-5 text-center copyright-holder">
                            <a href="https://www.facebook.com/andressaawakeningminds/" target="_blank" rel="noopener noreferrer"><img src={iconfacebook} alt="" /></a>
                            <a href="https://www.instagram.com/andressa_mokesinski/" target="_blank" rel="noopener noreferrer"><img src={iconinstagram} alt="" /></a>
                            <a href="https://api.whatsapp.com/send?phone=+971552586276" target="_blank" rel="noopener noreferrer"><img src={iconwhats} alt="" /></a>

                            <p className="copyright">
                                @ 2020 Awakening Minds. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;