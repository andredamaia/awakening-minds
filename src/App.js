import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'));
const Hipnoterapia = lazy(() => import('./pages/Hipnoterapia'));
const Pnl = lazy(() => import('./pages/Pnl'));
const DeixarIr = lazy(() => import('./pages/DeixarIr'));
const Coaching = lazy(() => import('./pages/Coaching'));
const Despertar = lazy(() => import('./pages/Despertar'));
const Kundalini = lazy(() => import('./pages/Kundalini'));

function App() {
  return(
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hipnoterapia" element={<Hipnoterapia />} />
        <Route path="/pnl" element={<Pnl />} />
        <Route path="/deixar-ir" element={<DeixarIr />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/despertar" element={<Despertar />} />
        <Route path="/kundalini" element={<Kundalini />} />
      </Routes>

      <Footer />
    </>
  )
  
}

export default App;
