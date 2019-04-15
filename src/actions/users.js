import { message } from 'antd'
import { validUpdate } from '../assets/texts/messages'
import callApi from '../utils/api'

export function getusers(token) {
  return dispatch => {
    callApi(token, 'user/v2', 'post',
      {
        page: 0,
        limit: 250
      }
    ).then(res => {
      dispatch({ type: 'GETUSERS', data: res });
      dispatch({ type: 'GETUSERSFORDDL', data: res })
    })
  }
}

export function getuser(token, userId) {
  return dispatch => {
    callApi(token, `user/v2/${userId}`, 'get', null).then(res => {
      dispatch({ type: 'GETUSER', data: res });
    })
  }
}

export function updateuser(token,userId,body) {
  return dispatch => {
      callApi(token, `user/v2/${userId}`, 'PATCH', body).then(res => {
          if (res.ok === 1) {
            debugger;
            dispatch(getusers(token));
            message.success(validUpdate);
          } 
          // else
          //     message.error(invalidLogin);
      })
  }
}