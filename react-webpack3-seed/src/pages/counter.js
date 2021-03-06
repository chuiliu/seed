import React, { Component } from 'react';
import { increase, decrease, reset } from '../redux/actions/counter';

import { connect } from 'react-redux';

import Nav from '../components/Nav';

class Counter extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>counter: {this.props.counter.count}</p>
                <button onClick={() => this.props.decrease()}>decrease</button>
                <button onClick={() => this.props.increase()}>increase</button>
                <button onClick={() => this.props.reset()}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(increase())
        },
        decrease: () => {
            dispatch(decrease())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);
