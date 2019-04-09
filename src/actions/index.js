import {getusers} from './users'
import {getdepartments} from './departments'

export function getInitials (token) {
    return dispatch => {
        setTimeout(() => {
            dispatch(getusers(token))
        dispatch(getdepartments(token))
        }, 500)
        
}
}
