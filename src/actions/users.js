import { message } from "antd";
import {
  validUpdate,
  validAdd,
  invalidUpdate,
  invalidAdd,
  invalidDelete,
  validDelete
} from "../assets/texts/messages";
import callApi from "../utils/api";

export function getusers(token) {
  return dispatch => {
    callApi(token, "user/v2", "post", {
      page: 0,
      limit: 250
    }).then(res => {
      dispatch({ type: "GETUSERS", data: res });
      dispatch({ type: "GETUSERSFORDDL", data: res });
    });
  };
}

export function getuser(token, userId) {
  return dispatch => {
    callApi(token, `user/v2/${userId}`, "get", null).then(res => {
      dispatch({ type: "GETUSER", data: res });
    });
  };
}

export function updateuser(token, userId, body) {
  return dispatch => {
    callApi(token, `user/v2/${userId}`, "PATCH", body).then(res => {
      if (res.ok === 1) {
        dispatch(getusers(token));
        message.success(validUpdate);
      } else message.error(invalidUpdate);
    });
  };
}

export function insertuser(token, body) {
  return dispatch => {
    callApi(token, `user/v2/add`, "POST", body).then(res => {
      if (res.messageType === 1) {
        dispatch(getusers(token));
        message.success(validAdd);
      } else message.error(invalidAdd);
    });
  };
}

export function deleteuser(token, userId) {
  return dispatch => {
    callApi(token, `user/v2/delete/${userId}`, "GET", null).then(res => {
      if (res.messageType === 1) {
        dispatch(getusers(token));
        message.success(validDelete);
      } else message.error(invalidDelete);
    });
  };
}
