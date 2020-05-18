import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logo from '../../../assets/logo.png';
import brazil from '../../../assets/brazil.png';

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
                        <div className="col-8 col-md-3">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>

                        <div className="col-3 d-md-none">
                            <a href="/pt" style={{ transform: 'translateY(4px)', display: 'inline-block' }}><img src={brazil} alt="" /></a>
                        </div>
                        
                        <div className="col-12 col-md-9 d-none d-md-block">
                            <ul>
                                <li>
                                    <Link 
                                        to="/"
                                        className={ location.pathname === '/' ? "active" : "" }
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/hypnotherapy"
                                        className={ location.pathname === '/hypnotherapy' ? "active" : "" }
                                    >
                                        Hypnotherapy
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link 
                                        to="/nlp"
                                        className={ location.pathname === '/nlp' ? "active" : "" }
                                    >
                                        NLP
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/letting-go"
                                        className={ location.pathname === '/letting-go' ? "active" : "" }
                                    >
                                        Letting Go
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/life-coaching"
                                        className={ 
                                            location.pathname === '/life-coaching' || 
                                            location.pathname === '/spiritual-awakening' || 
                                            location.pathname === '/kundalini' ? "active" : "" 
                                        }
                                    >
                                        Coaching
                                    </Link>

                                    <ul className="list-dropdown">
                                        <li><Link to="/life-coaching">Life coaching</Link></li>
                                        <li><Link to="/spiritual-awakening">Spiritual Awakening</Link></li>
                                        <li><Link to="/kundalini">Kundalini</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="https://andressa-awakeningminds.com/blog/&lang=en">Blog</a>
                                </li>

                                <li>
                                    <Link 
                                        to="/contact"
                                        className={ location.pathname === '/contact' ? "active" : "" }
                                    >
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <a href="/pt"><img src={brazil} alt="" /></a>
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











