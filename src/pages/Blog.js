import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

import blog1 from '../assets/ego.jpg';
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
                                <Link to="/pt/posts/despertar-espiritual-e-morte-do-ego">
                                    <img src={blog1} style={{ width: '100%' }} alt="" />
                                </Link>
                            </div>

                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-md-8">
                                    <span className="blog-title">Despertar Espiritual e morte do Ego</span>
                                </div>

                                <div className="col-12 col-md-4 text-right">
                                    <span className="blog-info"><img src={calendar} alt="" /> 14/03/2020</span>
                                    <span className="blog-info" style={{ color: '#ddbf78' }}><img src={folder} alt="" /> #kundalini</span>
                                </div>
                            </div>

                            <p>Pensando sobre o seu pequeno “Eu”, aquele que esta separado e foi criado quando você tinha entre 7 e 9 anos. Depois de se identificar com aquele personagem que tem um nome, um endereco, faz algum esporte na escola e tem um brinquedo que adora, aquele pequeno “Eu” (Ego) cresceu fora de controle e agora comanda o seu “Eu real”.</p>

                            <Link to="/pt/posts/despertar-espiritual-e-morte-do-ego" className="button-blog">
                                Continue Lendo <img src={iconBlog} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="sidebar">
                            <img src={sobre} alt="Andressa" />

                            <h2>Sobre mim</h2>

                            <p>Brasileira, ex-gerente regional de compras em uma empresa multinacional em Dubai, decidi deixar o mundo corporativo em busca de liberdade e transformação pessoal, e ajudar as pessoas a também criarem a vida que sempre sonharam.</p>

                            <p>Apaixonada pelo comportamento humano, trabalho principalmente online, com Saúde Emocional e Life & Espiritual Coaching enquanto viajo pelo mundo.</p>

                            <form action="" className="search">
                                <input type="text" placeholder="Procurar no site" />
                                <button><img src={iconSearch} alt="Andressa" /></button>
                            </form>

                            <div className="posts">
                                <h2>Categorias</h2>

                                <Link Link to="/pt/posts/despertar-espiritual-e-morte-do-ego">
                                    • Artigos
                                </Link>
                                <Link Link to="/pt/posts/despertar-espiritual-e-morte-do-ego">
                                    • Vídeos
                                </Link>
                            </div>

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

                                <a href="#">• Despertar Espiritual e morte do Ego</a>
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
