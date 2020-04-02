import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MenuHolder from './components/MenuHolder/MenuHolder';
import Loading from './components/Loading/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const trackingId = "UA-162540529-1"; 
ReactGA.initialize(trackingId);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Suspense fallback={<div><Loading /></div>}>
    <Router history={history}>
      <ScrollToTop />
      <MenuHolder />
      <App />
    </Router>
</Suspense>, rootElement);
} else {
  render(<Suspense fallback={<div><Loading /></div>}>
    <Router history={history}>
      <ScrollToTop />
      <MenuHolder />
      <App />
    </Router>
</Suspense>, rootElement);
}

