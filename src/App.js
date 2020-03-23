import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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


function App() {
  return(
    <>
      <Header/>

      <Routes>
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
      </Routes>

      <Footer />
    </>
  )
  
}

export default App;
