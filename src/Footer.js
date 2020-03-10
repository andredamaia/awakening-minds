import React from 'react';

import iconfacebook from './assets/icon-facebook.png'
import iconinstagram from './assets/icon-instagram.png'
import iconwhats from './assets/icon-whats.png'


function Footer() {
    return(
        <>
            

            <div className="bg-contato">
                <div className="container">
                    <div className="row">
                        <div className="col-12 contato">
                            <h2>Contato</h2>
                        </div>

                        <div className="col-12 col-md-3 endereço">
                            <span className="title">Endereço Dubai</span>
                            <p>Dubai Marina- Dubai<br/> United Arab Emirates.</p>

                            <span className="title">Endereço Brasil</span>
                            <p>Trindade- Florianópolis,<br/> Santa Catarina<br/> Brasil</p>

                            <span className="title">Telefone</span>
                            <p>971 55 2586276</p>
                        </div>

                        <form action="" className="row">
                            <div className="col-12 col-md-9">
                                <div className="input-block">
                                    <input name="nome" id="nome" placeholder="Nome" required />
                                </div>

                                <div className="input-block">
                                    <input name="email" id="email" placeholder="E-mail" required />
                                </div>

                                <div className="input-block">
                                    <input name="telefone" id="telefone" placeholder="telefone" required />
                                </div>

                                <div className="input-block">
                                    <input name="mensagem" id="mensagem" placeholder="mensagem" required />
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-2 button">
                                <button className="button-default">Enviar</button>
                            </div>
                        
                        </form>

                       
                            

                        

                        <div className="col-12 text-center">
                            <a href=""> <img src={iconfacebook} alt="" /></a>
                            <a href=""> <img src={iconinstagram} alt="" /></a>
                            <a href=""> <img src={iconwhats} alt="" /></a>

                            <p className="copyright">@2020 Cartola. All rights reserved. Terms and condictions. Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







export default Footer;