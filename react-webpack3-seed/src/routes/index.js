import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Index from '../pages/index';
import About from '../pages/about';
import Counter from '../pages/counter';

const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/counter" component={Counter} />
        </div>
    </Router>
);

export default AppRouter;
