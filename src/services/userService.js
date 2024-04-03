import axios from "axios";

export const getAllUsers = async () => {
  const users = await axios.get("http://localhost/goqii/api.php")
  return users
}


export const addUser = async (userData) => {
  const response = await axios.post("http://localhost/goqii/api.php", userData)
  console.log(response) 
  return response
}

export const editUser = async (userId, userData) => {
  const response = await axios.put(`http://localhost/goqii/api.php?userId=${userId}`, userData)
  console.log({response})
  return response
}

export const deleteUser = async (userId) => {
  const response = await axios.delete(`http://localhost/goqii/api.php?userId=${userId}`)
  return response
}