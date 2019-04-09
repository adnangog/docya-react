const initialState = {
  departments: null,
  department: null,
  departmentsfordll: null
};

const documentReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GETDEPARTMENTS':
      return {
        ...state,
        departments: action.data
      }
    case 'GETDEPARTMENTSFORDDL':
      return {
        ...state,
        departmentsfordll: action.data.data.map((a) => { return { id: a.id, name: a.name } })
      }
    case 'GETDEPARTMENT':
      return {
        ...state,
        department: action.data
      }
    default:
      return state
  }
}

export default documentReducers