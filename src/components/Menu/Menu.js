import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

export default function Hambuger() {
    return (
        <Menu right>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/hipnoterapia">Hipnoterapia</Link></li>
                <li><Link to="/pnl">Pnl</Link></li>
                <li><Link to="/deixar-ir">Deixar ir</Link></li>
                <li><Link to="/life-coaching">Coaching</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </Menu>
    );
}