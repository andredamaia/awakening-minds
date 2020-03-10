import React from 'react';

import logo from './assets/logo.png'

function Header(){
    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4">

                            <img src={logo} alt="" />

                        </div>
                        
                        <div className="col-12 col-md-8">
                            <ul>
                                <li>
                                    <a href="">Menu</a>
                                </li>

                                <li>
                                    <a href="">Hipnoterapia</a>
                                </li>
                                
                                <li>
                                    <a href="">Pnl</a>
                                </li>

                                <li>
                                    <a href="">Deixar ir</a>
                                </li>

                                <li>
                                    <a href="">Coaching</a>
                                </li>

                                <li>
                                    <a href="">Blog</a>
                                </li>

                                <li>
                                    <a href="#">contato</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                


            </header>

            
            
            
        </>
    )
       
}   


export default Header;











