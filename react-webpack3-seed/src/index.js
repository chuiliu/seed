import React from 'react';
import { render } from 'react-dom';

import router from './routes/index';
import { Provider } from 'react-redux';
import store from './redux/stores';

import AppRouter from './routes';
import './app.css';

render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
