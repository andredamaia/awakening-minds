import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

import blog1 from '../assets/img-blog.jpg';
import calendar from '../assets/calendar.png';
import folder from '../assets/folder.png';
import sobre from '../assets/sobre.png';
import iconBlog from '../assets/icon-blog.png';
import iconSearch from '../assets/icon-search.png';

export default function Blog() {
  return (
    <>
        <Helmet>
            <title>Blog - Awakening Minds</title>
            <meta name="description" content="Apaixonada pelo comportamento humano, trabalho principalmente online, com Saúde Emocional e Life & Espiritual Coaching enquanto viajo pelo mundo." />
        </Helmet>

        <div className="bg-blog">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Blog</h2>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="box-blog">
                            <div className="blog-image">
                                <Link to="/en/posts/spiritual-awakening-&-ego-death"><img src={blog1} alt="" /></Link>
                            </div>

                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-md-8">
                                    <span className="blog-title">Spiritual Awakening & Ego death</span>
                                </div>

                                <div className="col-12 col-md-4 text-right">
                                    <span className="blog-info"><img src={calendar} alt="" /> 14/03/2020</span>
                                    <span className="blog-info" style={{ color: '#ddbf78' }}><img src={folder} alt="" /> #kundalini</span>
                                </div>
                            </div>

                            <p>Thinking about your little self, the separated one that you created when you were around 07-09 years old, the "little Me". After identifying to that character who has a name, an address, plays specific sport at Scholl and has a toy that he/she loves, that little you (Ego) has grow out of control and now rules the real you!</p>

                            <Link to="/en/posts/spiritual-awakening-&-ego-death" className="button-blog">
                                Read more <img src={iconBlog} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="sidebar">
                            <img src={sobre} alt="Andressa" />

                            <h2>About me</h2>

                            <p>Brasileira, ex-gerente regional de compras em uma empresa multinacional em Dubai, decidi deixar o mundo corporativo em busca de liberdade e transformação pessoal, e ajudar as pessoas a também criarem a vida que sempre sonharam.</p>

                            <p>Apaixonada pelo comportamento humano, trabalho principalmente online, com Saúde Emocional e Life & Espiritual Coaching enquanto viajo pelo mundo.</p>

                            <form action="" className="search">
                                <input type="text" placeholder="Procurar no site" />
                                <button><img src={iconSearch} alt="Andressa" /></button>
                            </form>

                            <div className="tags">
                                <h2>Tags</h2>

                                <a href="#">kundalini</a>
                                <a href="#">pnl</a>
                                <a href="#">hipnoterapia</a>
                                <a href="#">deixar ir</a>
                                <a href="#">coaching</a>
                                <a href="#">despertar</a>
                                <a href="#">videos</a>
                                <a href="#">artigos</a>
                                <a href="#">técnicas</a>
                            </div>

                            <div className="posts">
                                <h2>Posts Recentes</h2>

                                <a href="#">• Spiritual Awakening & Ego death</a>
                            </div>

                            <h3 style={{ fontSize: 26, border: 'none', padding: 0, marginBottom: 20 }}>Inscreva-se para receber minhas últimas atualizações</h3>

                            <form action="" className="newsletter">
                                <input type="text" placeholder="Cadastre seu e-mail" />
                                <button>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
