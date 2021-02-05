import React, { lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import $ from 'jquery';

import Header from './languages/components/Header/Header';
import Footer from './languages/components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'));
const Hipnoterapia = lazy(() => import('./pages/Hipnoterapia'));
const Pnl = lazy(() => import('./pages/Pnl'));
const DeixarIr = lazy(() => import('./pages/DeixarIr'));
const LifeCoaching = lazy(() => import('./pages/LifeCoaching'));
const Despertar = lazy(() => import('./pages/Despertar'));
const Kundalini = lazy(() => import('./pages/Kundalini'));
// const Blog = lazy(() => import('./pages/Blog'));
// const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contato = lazy(() => import('./pages/Contato'));
const OnlineSessions = lazy(() => import('./components/OnlineSessions/OnlineSessions'));

const AppEN = lazy(() => import('./languages/App'));
const HomeEN = lazy(() => import('./languages/Home'));
const HipnoterapiaEN = lazy(() => import('./languages/Hipnoterapia'));
const PnlEN = lazy(() => import('./languages/Pnl'));
const DeixarIrEN = lazy(() => import('./languages/DeixarIr'));
const LifeCoachingEN = lazy(() => import('./languages/LifeCoaching'));
const DespertarEN = lazy(() => import('./languages/Despertar'));
const KundaliniEN = lazy(() => import('./languages/Kundalini'));
// const BlogEN = lazy(() => import('./languages/Blog'));
// const BlogPostEN = lazy(() => import('./languages/BlogPost'));
const ContatoEN = lazy(() => import('./languages/Contato'));
const OnlineSessionsEN = lazy(() => import('./languages/components/OnlineSessions/OnlineSessions'));

const trackingId = "UA-162540529-1"; 
ReactGA.initialize(trackingId);


function App() {
    let location = useLocation();
    const [lang, setLang] = useState(false);

    function usePageViews() {
        useEffect(() => {
            const url = location.pathname;
            const checkLangUrl = url.includes("/pt");

            if(checkLangUrl) {
              setLang(true);
            }
        }, [location]);
    }

    usePageViews();

    useEffect(() => {
      
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(window.location.pathname + window.location.search);

        $('.popup-close').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');
        $('.popup-close').on('click', function(){
          $('.layer').fadeOut();
        });

        setTimeout(() => {
          $('.layer').fadeIn();
        }, 10000);
    }, [location]);

    const [popup_name, setPopupName] = useState('');
    const [popup_email, setPopupEmail] = useState('');

    let newLang = '';

    if(lang){
      newLang = 'pt';
    } else {
      newLang = 'en';
    }

    function handleFormSubmit2(e) {
        e.preventDefault();

        const data = {
            newLang,
            popup_name,
            popup_email,
        };

        $('.popup-form button').html('...')

        $.ajax({
            url:'https://andressa-awakeningminds.com/mail/subscribe-avaliacao.php',
            type:'POST',
            data:data,
            success:function(data){
              console.log(data);
              $('.popup-form button').addClass('popup-form-ok');
              $('.popup-form button').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>');

              setPopupName('');
              setPopupEmail('');

              setTimeout(function(){ 
                $('.popup-form button').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'); 
                $('.layer').fadeOut();
              }, 2000);
            }
        });
    }


  return(
    <>
      { lang ? '' : <Header /> }

      <div className="layer">
        <div className="popup popup-blog">
            <div className="popup-close">
            
            </div>
            
            <div className="popup-info">
                <div>
                  { lang ? <h2>Posso te ajudar?</h2> : <h2>Hello, can I help you?</h2> }
                </div>

                <div>
                  { lang ? <p>Parabéns por querer melhorar sua vida! Agende Agora sua sessão de avaliação gratuita.</p> : <p>Well done for wanting to improve your life! Book Now your free assessment session.</p> }
                </div>
            </div>

            <div className="popup-form">
                <form action="" onSubmit={handleFormSubmit2} method="post" className="form">
                    <div>
                      <input 
                            type="text" 
                            placeholder={ lang ? 'Nome' : 'Name' }
                            name="popup-nome"
                            id="popup-nome"
                            value={popup_name}
                            onChange={e => setPopupName(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder={ lang ? 'Email' : 'Email' }
                            name="popup-email"
                            id="popup-email"
                            value={popup_email}
                            onChange={e => setPopupEmail(e.target.value)}
                            required 
                        />
                        
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>

      <Routes>
        <Route path="" element={<HomeEN />} />
        <Route path="hypnotherapy" element={<HipnoterapiaEN />} />
        <Route path="nlp" element={<PnlEN />} />
        <Route path="letting-go" element={<DeixarIrEN />} />
        <Route path="life-coaching" element={<LifeCoachingEN />} />
        <Route path="spiritual-awakening" element={<DespertarEN />} />
        <Route path="kundalini" element={<KundaliniEN />} />
        {/* <Route path="blog" element={<BlogEN />} /> */}
        {/* <Route path="posts/:slug" element={<BlogPostEN />} /> */}
        <Route path="/contact" element={<ContatoEN />} />
        <Route path="/online-sessions" element={<OnlineSessionsEN interna={true} />} />
      </Routes>

      <Routes>
        <Route path="/pt" element={<AppEN />}>
          <Route path="/" element={<Home />} />
          <Route path="/hipnoterapia" element={<Hipnoterapia />} />
          <Route path="/pnl" element={<Pnl />} />
          <Route path="/deixar-ir" element={<DeixarIr />} />
          <Route path="/life-coaching" element={<LifeCoaching />} />
          <Route path="/despertar-espiritual" element={<Despertar />} />
          <Route path="/kundalini" element={<Kundalini />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/posts/:slug" element={<BlogPost />} /> */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/online-sessions" element={<OnlineSessions interna={true} />} />
        </Route>
      </Routes>

      { lang ? '' : <Footer /> }
    </>
  )
  
}

export default App;
