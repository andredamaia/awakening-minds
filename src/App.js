import React, { lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './languages/components/Header/Header';
import Footer from './languages/components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'));
const Hipnoterapia = lazy(() => import('./pages/Hipnoterapia'));
const Pnl = lazy(() => import('./pages/Pnl'));
const DeixarIr = lazy(() => import('./pages/DeixarIr'));
const LifeCoaching = lazy(() => import('./pages/LifeCoaching'));
const Despertar = lazy(() => import('./pages/Despertar'));
const Kundalini = lazy(() => import('./pages/Kundalini'));
const Contato = lazy(() => import('./pages/Contato'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const AppEN = lazy(() => import('./languages/App'));
const HomeEN = lazy(() => import('./languages/Home'));
const HipnoterapiaEN = lazy(() => import('./languages/Hipnoterapia'));
const PnlEN = lazy(() => import('./languages/Pnl'));
const DeixarIrEN = lazy(() => import('./languages/DeixarIr'));
const LifeCoachingEN = lazy(() => import('./languages/LifeCoaching'));
const DespertarEN = lazy(() => import('./languages/Despertar'));
const KundaliniEN = lazy(() => import('./languages/Kundalini'));
const BlogEN = lazy(() => import('./languages/Blog'));
const BlogPostEN = lazy(() => import('./languages/BlogPost'));
const ContatoEN = lazy(() => import('./languages/Contato'));


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

  return(
    <>
      { lang ? '' : <Header /> }

      <Routes>
        <Route path="" element={<HomeEN />} />
        <Route path="hypnotherapy" element={<HipnoterapiaEN />} />
        <Route path="nlp" element={<PnlEN />} />
        <Route path="letting-go" element={<DeixarIrEN />} />
        <Route path="life-coaching" element={<LifeCoachingEN />} />
        <Route path="spiritual-awakening" element={<DespertarEN />} />
        <Route path="kundalini" element={<KundaliniEN />} />
        <Route path="blog" element={<BlogEN />} />
        <Route path="posts/:slug" element={<BlogPostEN />} />
        <Route path="/contact" element={<ContatoEN />} />
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/posts/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>

      { lang ? '' : <Footer /> }
    </>
  )
  
}

export default App;
