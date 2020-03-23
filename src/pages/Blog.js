import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

import blog1 from '../assets/img-blog.jpg';
import calendar from '../assets/calendar.png';
import folder from '../assets/folder.png';
import sobre from '../assets/sobre.png';

export default function Blog() {
  return (
    <>
        <div className="bg-blog">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Blog</h2>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="box-blog">
                            <div className="blog-image">
                                <Link to="/posts/spiritual-awakening-&-ego-death"><img src={blog1} alt="" /></Link>
                            </div>

                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-md-8">
                                    <span className="blog-title">Spiritual Awakening & Ego death</span>
                                </div>

                                <div className="col-12 col-md-4 text-right">
                                    <span className="blog-info"><img src={calendar} alt="" /> 14/03/2020</span>
                                    <span className="blog-info"><img src={folder} alt="" /> 14/03/2020</span>
                                </div>
                            </div>

                            <p>Thinking about your little self, the separated one that you created when you were around 07-09 years old, the "little Me". After identifying to that character who has a name, an address, plays specific sport at Scholl and has a toy that he/she loves, that little you (Ego) has grow out of control and now rules the real you!</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="sidebar">
                            <img src={sobre} alt="Andressa" />

                            <h2>Sobre mim</h2>

                            <p>Brasileira, ex- gerente regional de compras em uma empresa multinacional em Dubai, decidi deixar o mundo coorporativo em busca de liberdade e transformação pessoal, e ajudar as pessoas a também criarem a vida que sempre sonharam.</p>

                            <p>Apaixonada pelo comportamento humano, trabalho principalmente online, com Saúde Emocional e Life & Espiritual Coaching enquanto viajo pelo mundo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
