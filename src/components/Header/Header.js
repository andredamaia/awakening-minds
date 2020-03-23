import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

function Header(){
    let location = useLocation();

    function usePageViews() {
        useEffect(() => {
            
        }, []);
    }

    usePageViews();

    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                        
                        <div className="col-12 col-md-8">
                            <ul>
                                <li>
                                    <Link 
                                        to="/"
                                        className={ location.pathname === '/' ? "active" : "" }
                                    >
                                        Menu
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/hipnoterapia"
                                        className={ location.pathname === '/hipnoterapia' ? "active" : "" }
                                    >
                                        Hipnoterapia
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link 
                                        to="/pnl"
                                        className={ location.pathname === '/pnl' ? "active" : "" }
                                    >
                                        Pnl
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/deixar-ir"
                                        className={ location.pathname === '/deixar-ir' ? "active" : "" }
                                    >
                                        Deixar ir
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/coaching"
                                        className={ location.pathname === '/coaching' ? "active" : "" }
                                    >
                                        Coaching
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/blog"
                                        className={ location.pathname === '/blog' ? "active" : "" }
                                    >
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/contato"
                                        className={ location.pathname === '/contato' ? "active" : "" }
                                    >
                                        Contato
                                    </Link>
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











