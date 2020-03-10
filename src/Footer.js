import React from 'react';

import facebook from './assets/facebook.png'


function Footer() {
    return(
        <>
            <div className="bg-missao">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Missão</h2>
                        </div>

                        <div className="col-12 col-md-6">
                            <p><i>Awakening Minds Coaching & Therapy</i> tem a missão de expandir o nível de consciência das pessoas, impactando positivamente suas vidas para que encontrem um caminho <strong>livre de dor e sofrimento.</strong></p>
                        </div>
                    </div>
                </div>
            </div>

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
                            <div className="col-12 col-md-6">
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
                            
                        
                        </form>

                        <div className="col-12 col-md-2 button">
                            <button className="button-default">Enviar</button>
                        </div>
                            

                        

                        <div className="col-12 text-center">
                            <a href=""> <img src={facebook} alt="" /></a>
                            <a href=""> <img src={facebook} alt="" /></a>
                            <a href=""> <img src={facebook} alt="" /></a>

                            <p className="copyright">@2020 Cartola. All rights reserved. Terms and condictions. Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







export default Footer;