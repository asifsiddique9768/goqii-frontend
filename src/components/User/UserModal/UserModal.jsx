import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { closeModalAction } from "../../../actions/userAction";

export const UserModal = () => {
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
    dispatch(closeModalAction())
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.isAdding) {
      // Dispatch action to add user with form data
      dispatch({ type: "ADD_USER", payload: formData });
    } else if (state.isEditing && state.editingUser) {
      // Dispatch action to edit user with form data
      dispatch({ type: "EDIT_USER", payload: { userId: state.editingUser.id, userData: formData } });
    }
    // dispatch(closeModalAction());
  };

  useEffect(() => {
    // If isEditing is true and user data is available, prefill the form fields
    if (state.isEditing && state.editingUser) {
      const { full_name, email, profile_pic, phone_number, country, dob, password } =
        state.editingUser;
        console.log(state.editingUser)
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
    <div className="h-100 w-100 bg-danger">
      <div
        className="bg-light position-absolute mx-auto w-75"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {state.isAdding ? "Adding" : "Editing"} User
              </h1>
              <button
              onClick={handleCloseModal}
                type="button"
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
              <button
                onClick={handleCloseModal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
