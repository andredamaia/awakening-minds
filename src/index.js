import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

ReactDOM.render(
    <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Router>
            <App />
        </Router>
    </Suspense>, document.getElementById('root')
);

