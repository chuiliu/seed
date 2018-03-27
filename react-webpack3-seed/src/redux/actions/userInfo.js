export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

function  getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    };
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo
    };
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    };
}

export function getUserInfo() {
    return function(dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://127.0.0.1:8080/api/test.json').then(response => {
            return response.json();
        }).then((json) => {
            if (json.result === 0) {
                dispatch(getUserInfoSuccess(json.data));
            } else {
                dispatch(getUserInfoFail());
            }
        }).catch(() => {
            dispatch(getUserInfoFail());
        });
    };
}
