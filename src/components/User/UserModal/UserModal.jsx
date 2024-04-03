import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { closeModalAction } from "../../../actions/userAction";
import { UserForm } from "../UserForm/UserForm";

export const UserModalNew = () => {
  const {state, dispatch} = useContext(UserContext)
 
  const handleCloseModal = () => {
    dispatch(closeModalAction());
  };

  return (
    <div className="modal-bg">
      <div className="modal-content">
        <div>
          <div className="d-flex justify-content-between">
            <h1 className=" fs-5" >
              {state.isAdding ? "Adding" : "Editing"} User
            </h1>
            <button
              onClick={handleCloseModal}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <hr />
          <UserForm handleCloseModal={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};
