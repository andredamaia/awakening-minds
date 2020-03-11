import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Coaching from './components/Coaching';
import Hipnoterapia from './components/Hipnoterapia';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import './Header.css';
import './Footer.css';
import './components/Hipnoterapia.css';
import './Home.css';

function App() {
  return(
    <>
      <Header/>

      {/*<Home /> */}
      {/* <Coaching /> */}

      <Hipnoterapia />

      <Footer />
    </>
  )
  
}

export default App;
