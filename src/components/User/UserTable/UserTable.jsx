import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/UserContext"
import { deleteUser, getAllUsers } from "../../../services/userService"
import { allUsersAction, deleteUserAction, userEditingAction } from "../../../actions/userAction"

export const UserTable = () => {
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    (
      async() => {
        const {data} = await getAllUsers()
        dispatch(allUsersAction(data))
      }
    )()
  }, [dispatch])

  const handleUserDelete = async (userId) => {
    try {
      await deleteUser(userId)
      dispatch(deleteUserAction(userId))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <td>Profile</td>
              <td>Full Name</td>
              <td>email</td>
              <td>password</td>
              <td>country</td>
              <td>DOB</td>
              <td>contact</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              state?.users?.map((user) => {
                const {id, full_name, email, password, country, profile_pic, dob, phone_number} = user
                return (
                  <tr key={id}>
                  <td className="d-flex justify-content-center">
                    {profile_pic ? <img src={profile_pic} alt="" /> :
                    <i className="bi-person-circle"></i>}
                  </td>
                  <td>{full_name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{country}</td>
                  <td>{dob}</td>
                  <td>{phone_number}</td>
                  <td className="d-flex justify-content-around">
                      <i onClick={() => dispatch(userEditingAction(user))} className="bi-pencil-square text-primary"></i>
                    <i className="bi-trash text-danger" onClick={() => handleUserDelete(user.id)}></i>
                  </td>
                </tr>
                )
              }
              )
            }
          </tbody>
        </table>
      </div>
  )
}