import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

// import brazil from '../../../assets/brazil.png';

export default function Hambuger() {
    return (
        <Menu right>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hypnotherapy">Hypnotherapy</Link></li>
                <li><Link to="/nlp">NLP</Link></li>
                <li><Link to="/letting-go">Letting Go</Link></li>
                <li style={{ marginTop: 10 }}>
                    <Link 
                        to="/life-coaching" 
                        style={{ fontSize: 10, opacity: .4, textTransform: 'uppercase' }}
                    >
                        Coaching
                    </Link>
                </li>
                <li><Link to="/life-coaching">Life coaching</Link></li>
                <li><Link to="/spiritual-awakening">Spiritual Awakening</Link></li>
                <li style={{ marginBottom: 10 }}><Link to="/kundalini">Kundalini</Link></li>
                <li><a href="https://andressa-awakeningminds.com/blog/&lang=en">Blog</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Menu>
    );
}