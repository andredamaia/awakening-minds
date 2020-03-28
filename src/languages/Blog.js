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
                                <div className="col-12 col-md-7">
                                    <span className="blog-title">Spiritual Awakening & Ego death</span>
                                </div>

                                <div className="col-12 col-md-5 text-right">
                                    <span className="blog-info"><img src={calendar} alt="" /> 14/03/2020</span>
                                    <span className="blog-info" style={{ color: '#ddbf78' }}><img src={folder} alt="" /> Vídeos, #kundalini</span>
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

                            <p>Brazilian, former Regional Head of Procurement at a Multinational company based in Dubai, Andressa decided to leave the corporate world to pursue her Personal Transformation and  Freedom and to help people also create the Life of their dreams.</p>

                            <p>Passionate about Human behavior, she works mostly online with Emotional Health, Life & Spiritual Coaching while travels the World.</p>

                            <form action="" className="search">
                                <input type="text" placeholder="Procurar no site" />
                                <button><img src={iconSearch} alt="Andressa" /></button>
                            </form>
                            
                            <div className="posts">
                                <h2>Categories</h2>

                                <Link Link to="/en/posts/spiritual-awakening-&-ego-death">
                                    • Articles
                                </Link>
                                <Link Link to="/en/posts/spiritual-awakening-&-ego-death">
                                    • Videos
                                </Link>
                            </div>

                            <div className="tags">
                                <h2>Tags</h2>

                                <a href="/">kundalini</a>
                                <a href="/">pnl</a>
                                <a href="/">hipnoterapia</a>
                                <a href="/">deixar ir</a>
                                <a href="/">coaching</a>
                                <a href="/">despertar</a>
                                <a href="/">videos</a>
                                <a href="/">artigos</a>
                                <a href="/">técnicas</a>
                            </div>

                            <div className="posts">
                                <h2>Recent posts</h2>

                                <Link Link to="/en/posts/spiritual-awakening-&-ego-death">
                                    • Spiritual Awakening & Ego death
                                </Link>
                            </div>

                            <h3 style={{ fontSize: 26, border: 'none', padding: 0, marginBottom: 20 }}>Subscribe to our newsletter</h3>

                            <form action="" className="newsletter">
                                <input type="text" placeholder="Your email" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
