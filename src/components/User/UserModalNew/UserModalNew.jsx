import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { addUserAction, closeModalAction, editUserAction } from "../../../actions/userAction";
import { addUser, editUser } from "../../../services/userService";

export const UserModalNew = () => {
  const { state, dispatch } = useContext(UserContext);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    profile_pic: "",
    phone_number: "",
    country: "",
    dob: "",
    password: "",
  });

  const handleCloseModal = () => {
    dispatch(closeModalAction());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      if (state.isAdding) {
        const {data} = await addUser(formData)
        dispatch(addUserAction(data))
      } else if (state.isEditing) {
        const {data} = await editUser(state.editingUser.id, formData)
        dispatch(editUserAction({userId: state.editingUser.id, editedUser: data}))
      }
    }catch(error){
      console.log(error)
    }finally{
      dispatch(closeModalAction());
    }
  };

  useEffect(() => {
    // If isEditing is true and user data is available, prefill the form fields
    if (state.isEditing && state.editingUser) {
      const {
        full_name,
        email,
        profile_pic,
        phone_number,
        country,
        dob,
        password,
      } = state.editingUser;
      console.log(state.editingUser);
      setFormData({
        full_name,
        email,
        profile_pic,
        phone_number,
        country,
        dob,
        password, // Assuming password is not editable in the form
      });
    } else {
      // Reset form data if not editing
      setFormData({
        full_name: "",
        email: "",
        profile_pic: "",
        phone_number: "",
        country: "",
        dob: "",
        password: "",
      });
    }
  }, [state.isEditing, state.editingUser]);

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="profilePic" className="form-label">
                Profile Picture
              </label>
              <input
                type="text"
                className="form-control"
                id="profilePic"
                value={formData.profile_pic}
                onChange={(e) =>
                  setFormData({ ...formData, profile_pic: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={formData.phone_number}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {state.isAdding ? "Add User" : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
