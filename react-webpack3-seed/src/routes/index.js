import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Index from '../pages/index';
import About from '../pages/about';

// basename=""

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
        </div>
    </Router>
)
