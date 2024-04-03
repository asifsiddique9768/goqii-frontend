
export const initialState = {
  users: [],
  isEditing: false,
  isAdding: false,
  editingUser: null
}

export const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_ALL_USERS":{
      return {...state, users: action.payload}
    }
    case "USER_ADDING": {
      return {...state, isAdding: true}
    }
    case "USER_EDITING": {
      return {...state, isEditing: true, editingUser: action.payload}
    }
    case "CLOSE_MODAL": {
      return {...state, isAdding: false, isEditing: false, editingUser: null}
    }
    case "ADD_USER": {
      return {...state, users: [...state.users, action.payload]}
    }
    case "EDIT_USER": {
      const updatedUser = state.users.map(user =>{
        return user.id === action.payload.userId ? action.payload.editedUser : user
      })
      return {...state, users:updatedUser}
    }
    case "DELETE_USER": {
      const updatedUserAfterDelete = state.users.filter(user=> user.id !== action.payload)
      return {...state, users: updatedUserAfterDelete}
    }
  }
}