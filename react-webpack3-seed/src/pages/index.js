import React, { Component } from 'react';
import Nav from '../components/Nav';
import icon from '../img/img.png';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <img src={icon} alt=""/>
                <p>index page</p>
            </div>
        )
    }
}
