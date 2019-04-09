const initialState = {
  users: null,
  user: null,
  usersfordll: null
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETUSERS':
      return {
        ...state,
        users: action.data
      }
    case 'GETUSERSFORDDL':
      return {
        ...state,
        usersfordll: action.data.data.map((a) => { return { id: a.id, name: a.name } })
      }
    case 'GETUSER':
      return {
        ...state,
        user: action.data
      }
    default:
      return state
  }
}

export default usersReducers