import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

// import usa from '../../assets/usa-today.png';

export default function Hambuger() {
    return (
        <Menu right>
            <ul>
                <li><Link to="/pt">Home</Link></li>
                <li><Link to="/pt/hipnoterapia">Hipnoterapia</Link></li>
                <li><Link to="/pt/pnl">Pnl</Link></li>
                <li><Link to="/pt/deixar-ir">Deixar ir</Link></li>
                <li style={{ marginTop: 10 }}>
                    <Link 
                        to="/pt/life-coaching" 
                        style={{ fontSize: 10, opacity: .4, textTransform: 'uppercase' }}
                    >
                        Coaching
                    </Link>
                </li>
                <li><Link to="/pt/life-coaching">Life coaching</Link></li>
                <li><Link to="/pt/despertar-espiritual">Despertar espiritual</Link></li>
                <li style={{ marginBottom: 10 }}><Link to="/pt/kundalini">Kundalini</Link></li>
                <li><Link to="/pt/blog">Blog</Link></li>
                <li><Link to="/pt/contato">Contato</Link></li>
            </ul>
        </Menu>
    );
}