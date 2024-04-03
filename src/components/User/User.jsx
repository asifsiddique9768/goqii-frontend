import { useContext } from "react"
import { UserTable } from "./UserTable/UserTable"
import { UserContext } from "../../context/UserContext"
import { userAddingAction } from "../../actions/userAction"

export const User = () => {
  const {state, dispatch} = useContext(UserContext)
  return (
    <div className="container mt-4">
      <p className="fs-3 d-flex justify-content-between">
        <span >Users</span>
        <button onClick={() => dispatch(userAddingAction())} className="btn btn-success">Add User</button>
      </p>
      <UserTable />
    </div>
  )
}