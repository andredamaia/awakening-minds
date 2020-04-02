import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';
import usa from '../../assets/usa-today.png';

function Header(){
    let location = useLocation();

    function usePageViews() {
        useEffect(() => {
            
        }, []);
    }

    usePageViews();

    return(
        <>
            <header className="lang-pt">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 col-md-3">
                            <Link to="/pt"><img src={logo} alt="" /></Link>
                        </div>

                        <div className="col-2 d-md-none">
                            <a href="/" style={{ transform: 'translateY(4px)', display: 'inline-block' }}><img src={usa} alt="" /></a>
                        </div>
                        
                        <div className="col-12 col-md-9 d-none d-md-block">
                            <ul>
                                <li>
                                    <Link 
                                        to="/pt"
                                        className={ location.pathname === '/pt' ? "active" : "" }
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/pt/hipnoterapia"
                                        className={ location.pathname === '/pt/hipnoterapia' ? "active" : "" }
                                    >
                                        Hipnoterapia
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link 
                                        to="/pt/pnl"
                                        className={ location.pathname === '/pt/pnl' ? "active" : "" }
                                    >
                                        Pnl
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/pt/deixar-ir"
                                        className={ location.pathname === '/pt/deixar-ir' ? "active" : "" }
                                    >
                                        Deixar ir
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/pt/life-coaching"
                                        className={ 
                                            location.pathname === '/pt/life-coaching' || 
                                            location.pathname === '/pt/despertar-espiritual' || 
                                            location.pathname === '/pt/kundalini' ? "active" : "" 
                                        }
                                    >
                                        Coaching
                                    </Link>

                                    <ul className="list-dropdown">
                                        <li><Link to="/pt/life-coaching">Life coaching</Link></li>
                                        <li><Link to="/pt/despertar-espiritual">Despertar espiritual</Link></li>
                                        <li><Link to="/pt/kundalini">Kundalini</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link 
                                        to="/pt/blog"
                                        className={ location.pathname === '/pt/blog' ? "active" : "" }
                                    >
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/pt/contato"
                                        className={ location.pathname === '/pt/contato' ? "active" : "" }
                                    >
                                        Contato
                                    </Link>
                                </li>

                                <li>
                                    <a href="/"><img src={usa} alt="" /></a>
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











