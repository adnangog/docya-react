const documentReducers = (state = [], action) => {
    switch (action.type) {
      case 'GETDOCUMENTS':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      default:
        return state
    }
  }
  
  export default documentReducers