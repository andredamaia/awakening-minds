import React from 'react';

import '../styles/Contato.css';

import iconfacebook from '../assets/icon-facebook.png';
import iconinstagram from '../assets/icon-instagram.png';
import iconwhats from '../assets/icon-whats.png';
import ig from '../assets/ig.png';

export default function Contato() {
    return (
        <>
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
                            <p>971 55 2586276</p>
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

                        <div className="col-12 col-md-3 text-center">
                            <img src={ig} style={{ maxWidth: '100%' }} alt="" />
                        </div>

                        <div className="col-12 text-center copyright-holder">
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src={iconfacebook} alt="" /></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src={iconinstagram} alt="" /></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src={iconwhats} alt="" /></a>

                            <p className="copyright">
                                @ 2020 Awakening Minds. All rights reserved. Terms and condictions. Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
