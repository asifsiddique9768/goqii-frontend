export const allUsersAction = users => ({
  type: "SET_ALL_USERS",
  payload: users
})

export const userAddingAction = () => ({
  type: "USER_ADDING"
})

export const userEditingAction = (user) => ({
  type:"USER_EDITING",
  payload: user
})

export const closeModalAction = () => ({
  type: "CLOSE_MODAL"
})

export const addUserAction = (user) => ({
  type: "ADD_USER",
  payload: user
})

export const editUserAction = (editedData) => ({
  type: "EDIT_USER",
  payload: editedData
})

export const deleteUserAction = (userId) => ({
  type: "DELETE_USER",
  payload: userId
})