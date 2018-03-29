import React, { Component } from 'react';
import Nav from '../components/Nav';
import icon from '../img/icon-lg.jpg';

export default class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>about page</p>
                <h3>&lt;img&gt;</h3>
                <img src={icon} width="100"/>
                <h3>CSS background:url()</h3>
                <div className="bg-icon" style={{width: 100, height: 220}}></div>
            </div>
        )
    }
}
