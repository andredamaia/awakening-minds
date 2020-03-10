import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Coaching from './components/Coaching';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './global.css';
import './Header.css';
import './Footer.css';

function App() {
  return(
    <>
      <Header/>

      <Home />
      {/* <Coaching /> */}

      <Footer />
    </>
  )
  
}

export default App;
