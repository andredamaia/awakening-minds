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
                        <div className="col-12 col-md-3">
                            <Link to="/en"><img src={logo} alt="" /></Link>
                        </div>
                        
                        <div className="col-12 col-md-9 d-none d-md-block">
                            <ul>
                                <li>
                                    <Link 
                                        to="/en"
                                        className={ location.pathname === '/en' ? "active" : "" }
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/en/hypnotherapy"
                                        className={ location.pathname === '/en/hypnotherapy' ? "active" : "" }
                                    >
                                        Hypnotherapy
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link 
                                        to="/en/nlp"
                                        className={ location.pathname === '/en/nlp' ? "active" : "" }
                                    >
                                        NLP
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/en/letting-go"
                                        className={ location.pathname === '/en/letting-go' ? "active" : "" }
                                    >
                                        Letting Go
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/en/life-coaching"
                                        className={ 
                                            location.pathname === '/en/life-coaching' || 
                                            location.pathname === '/en/spiritual-awakening' || 
                                            location.pathname === '/en/kundalini' ? "active" : "" 
                                        }
                                    >
                                        Coaching
                                    </Link>

                                    <ul className="list-dropdown">
                                        <li><Link to="/en/life-coaching">Life coaching</Link></li>
                                        <li><Link to="/en/spiritual-awakening">Spiritual Awakening</Link></li>
                                        <li><Link to="/en/kundalini">Kundalini</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link 
                                        to="/en/blog"
                                        className={ location.pathname === '/en/blog' ? "active" : "" }
                                    >
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to="/en/contact"
                                        className={ location.pathname === '/en/contact' ? "active" : "" }
                                    >
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <a href="/"><img src={brazil} alt="" /></a>
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











