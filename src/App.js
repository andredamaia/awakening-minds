import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Coaching from './components/Coaching';
import Hipnoterapia from './components/Hipnoterapia';
import Pnl from './components/Pnl';
import Deixair from './components/Deixair';
import Despertar from './components/Despertar';
import Kundalini from './components/Kundalini';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './global.css';
import './Header.css';
import './Footer.css';
import './components/Hipnoterapia.css';
import './components/Pnl.css';
import './components/Deixair.css';
import './components/Coaching.css';
import './components/Despertar.css';
import './components/Kundalini.css';


function App() {
  return(
    <>
      <Header/>

      {/*<Home /> */}

      {/*<Coaching /> */}

      {/*<Hipnoterapia /> */}

      {/*<Deixair/> */}

      {/*<Pnl/>*/}

      {/*<Despertar /> */}

      <Kundalini />

      <Footer />
    </>
  )
  
}

export default App;
