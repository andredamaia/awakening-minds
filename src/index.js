import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Menu from './components/Menu/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Suspense fallback={<div><h1>Loading...</h1></div>}>
    <Router>
      <ScrollToTop />
      <Menu />
      <App />
    </Router>
</Suspense>, rootElement);
} else {
  render(<Suspense fallback={<div><h1>Loading...</h1></div>}>
    <Router>
      <ScrollToTop />
      <Menu />
      <App />
    </Router>
</Suspense>, rootElement);
}

