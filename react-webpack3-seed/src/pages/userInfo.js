import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../redux/actions/userInfo';

class UserInfo extends Component {
    render() {
        const { userInfo, isLoading, errMsg } = this.props.userInfo;

        console.log(isLoading, userInfo);

        return (
            <div>
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
                <button onClick={() => this.props.getUserInfo()}>getUserInfo</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
