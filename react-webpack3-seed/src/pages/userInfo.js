import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../redux/actions/userInfo';
import Nav from '../components/Nav';

class UserInfo extends Component {
    render() {
        const { userInfo, isLoading, errMsg } = this.props.userInfo;

        return (
            <div>
                <Nav/>
                <button onClick={() => this.props.getUserInfo()}>getUserInfo</button>
                {
                    isLoading ? 'loading...' :
                        (
                            errMsg ? errMsg :
                                <div>
                                    <h3>userInfo</h3>
                                    <p>id: {userInfo.id}</p>
                                    <p>name: {userInfo.name}</p>
                                </div>
                        )
                }
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
