import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

    return(
        <>
            <div className={ location.pathname === '/contato' ? "d-none" : "bg-contato lang-pt" }>
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
                            <form action="">
                                <div className="input-block">
                                    <input name="nome" id="nome" placeholder="Nome" required />
                                </div>

                                <div className="input-block">
                                    <input name="email" id="email" placeholder="E-mail" required />
                                </div>

                                <div className="input-block">
                                    <input name="telefone" id="telefone" placeholder="Telefone" required />
                                </div>

                                <div className="input-block text-center">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>

                                    <button className="button-default">Enviar</button>
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
                            <img src={ig} style={{ maxWidth: '100%' }} alt="" />
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