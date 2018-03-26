import React from 'react';
import ReactDom from 'react-dom';

import router from './routes/index';
// import Nav from './components/Nav';

// ReactDom.render(<Nav />, document.getElementById('app'));
ReactDom.render(router(), document.getElementById('app'));
