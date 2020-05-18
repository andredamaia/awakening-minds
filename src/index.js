import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MenuHolder from './components/MenuHolder/MenuHolder';
import Loading from './components/Loading/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Suspense fallback={<div><Loading /></div>}>
    <Router>
      <ScrollToTop />
      <MenuHolder />
      <App />
    </Router>
</Suspense>, rootElement);
} else {
  render(<Suspense fallback={<div><Loading /></div>}>
    <Router>
      <ScrollToTop />
      <MenuHolder />
      <App />
    </Router>
</Suspense>, rootElement);
}

