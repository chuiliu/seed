import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Index from '../pages/index';
import About from '../pages/about';
import Counter from '../pages/counter';
import UserInfo from '../pages/userInfo';

const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/counter" component={Counter} />
            <Route path="/userinfo" component={UserInfo} />
        </div>
    </Router>
);

export default AppRouter;
