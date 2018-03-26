import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">index page</Link></li>
                    <li><Link to="/about">about page</Link></li>
                </ul>
            </div>
        )
    }
}
