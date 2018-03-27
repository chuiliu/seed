import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                </ul>
            </div>
        )
    }
}
