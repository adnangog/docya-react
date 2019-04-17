import callApi from '../utils/api'
import { message } from 'antd';
import { invalidLogin, validLogin } from '../assets/texts/messages';
import { getInitials } from './index';

export function login(creds) {
    return dispatch => {
        callApi('', 'user/v2/login', 'post', {
            email: creds.email,
            password: creds.password
        }).then(res => {
            if (res.messageType === 1) {
                localStorage.setItem('token',res.token);
                dispatch({ type: "LOGIN", user: res.user, token: res.token })
                message.success(validLogin);
                dispatch(getInitials(res.token));
                
            } else
                message.error(invalidLogin);
        })
    }
}

export function getlogin(creds) {
    return dispatch => {
        callApi('', 'user/v2/getlogin', 'post', {
            email: creds.email,
            userId: creds.userId
        }).then(res => {
            if (res.messageType === 1) {
                localStorage.setItem('token',res.token);
                dispatch({ type: "LOGIN", user: res.user, token: res.token })
                dispatch(getInitials(res.token));
                
            } else
                message.error(invalidLogin);
        })
    }
}


export function logout() {
    return dispatch => {
        dispatch({ type: "LOGOUT" })
    }
}