import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

import brazil from '../../../assets/brazil.png';

export default function Hambuger() {
    return (
        <Menu right>
            <ul>
                <li><Link to="/en">Home</Link></li>
                <li><Link to="/en/hypnotherapy">Hypnotherapy</Link></li>
                <li><Link to="/en/nlp">NLP</Link></li>
                <li><Link to="/en/letting-go">Letting Go</Link></li>
                <li style={{ marginTop: 10 }}>
                    <Link 
                        to="/en/life-coaching" 
                        style={{ fontSize: 10, opacity: .4, textTransform: 'uppercase' }}
                    >
                        Coaching
                    </Link>
                </li>
                <li><Link to="/en/life-coaching">Life coaching</Link></li>
                <li><Link to="/en/spiritual-awakening">Spiritual Awakening</Link></li>
                <li style={{ marginBottom: 10 }}><Link to="/en/kundalini">Kundalini</Link></li>
                <li><Link to="/en/blog">Blog</Link></li>
                <li><Link to="/en/contact">Contact</Link></li>
                <li style={{ marginTop: 20 }}><a href="/"><img src={brazil} alt="" /></a></li>
            </ul>
        </Menu>
    );
}