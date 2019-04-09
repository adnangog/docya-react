const initialState = {
  accessToken: '56212169-e106-4c0f-92b2-e4c0a7b4a492',
  isLogged: false,
  user: null
};

const loginReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
            accessToken: action.token,
            isLogged:true,
            user:action.user
        }
      case 'LOGOUT':
        return {
          ...state,
            accessToken: initialState.accessToken,
            isLogged:false,
            user:null
        }
      default:
        return state
    }
  }
  
  export default loginReducers