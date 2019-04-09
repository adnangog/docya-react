import callApi from '../utils/api'

export function getdepartments(token) {
  return dispatch => {
    callApi(token, 'department/v2', 'post',
      {
        page: 0,
        limit: 250
      }
    ).then(res => {
      dispatch({ type: 'GETDEPARTMENTS', data: res });
      dispatch({ type: 'GETDEPARTMENTSFORDDL', data: res })
    })
  }
}

export function getdepartment(token, departmentId) {
  return dispatch => {
    callApi(token, `department/v2/${departmentId}`, 'get', null).then(res => {
      dispatch({ type: 'GETDEPARTMENT', data: res });
    })
  }
}