import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

import usa from '../../assets/usa-today.png';

export default function Hambuger() {
    return (
        <Menu right>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hipnoterapia">Hipnoterapia</Link></li>
                <li><Link to="/pnl">Pnl</Link></li>
                <li><Link to="/deixar-ir">Deixar ir</Link></li>
                <li style={{ marginTop: 10 }}>
                    <Link 
                        to="/life-coaching" 
                        style={{ fontSize: 10, opacity: .4, textTransform: 'uppercase' }}
                    >
                        Coaching
                    </Link>
                </li>
                <li><Link to="/life-coaching">Life coaching</Link></li>
                <li><Link to="/despertar-espiritual">Despertar espiritual</Link></li>
                <li style={{ marginBottom: 10 }}><Link to="/kundalini">Kundalini</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li style={{ marginTop: 20 }}><Link to="/en"><img src={usa} alt="" /></Link></li>
            </ul>
        </Menu>
    );
}