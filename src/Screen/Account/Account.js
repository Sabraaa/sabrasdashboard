import React, { useContext } from "react";
import { userContext } from "../../Context/UserContextProvider";
import { Formik, Form, Field, prepareDataForValidation } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastify } from "../../components/Toastify/Toastify";
import "./Account.scss";

const Account = () => {
  const { user, setUser } = useContext(userContext);
  const Pass = user.password;

  const validate = Yup.object({
    name: Yup.string().max(15, "Must be 15 characters or less"),
    // .required("Required"),
    familyName: Yup.string().max(20, "Must be 20 characters or less"),
    // .required("Required"),
    email: Yup.string().email("Email is invalid"),
    // .required("Required"),
    currentPassword: Yup.string().required("Required"),
    newPassword: Yup.string().min(6, "Must be 6 characters or more"),
    // .required("Required"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Password must match"
    ),
    // .required("Required"),
  });
  const onFormSubmition = (values) => {
    // if pass === currentpass bod ====> func
    if (Pass === values.currentPassword) {
      if (values.name !== "") {
        setUser((prev) => ({
          ...prev,
          name: values.name,
        }));
      }
      if (values.familyName !== "") {
        setUser((prev) => ({
          ...prev,
          familyName: values.familyName,
        }));
      }
      if (values.email !== "") {
        setUser((prev) => ({
          ...prev,
          email: values.email,
        }));
      }
      if (values.newPassword !== "") {
        if (values.newPassword === values.confirmNewPassword) {
          setUser((prev) => ({
            ...prev,
            password: values.newPassword,
          }));
        }
      }
    } else {
      toastify("Password incorrect");
    }
  };
  return (
    <div className="row main-wrapper">
      <div className="form-wrapper">
        {/* switch */}
        <input
          onChange={(e) => {
            setUser({
              ...user,
              status: e.target.checked ? "online" : "offline",
            });
          }}
          className="switch-input"
          type="checkbox"
          id="switch"
        />
        <label className="switch-label" htmlFor="switch">
          Toggle
        </label>
        <span className="switch-span"> {user.status} </span>
        {/* form */}
        <Formik
          initialValues={{
            name: "",
            familyName: "",
            email: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            onFormSubmition(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="row main-form">
              {/* name */}
              <div className="form-floating mb-3">
                <Field
                  id="nameInput"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                <label htmlFor="nameInput">Name</label>
                {errors.name && touched.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>

              {/* family name */}
              <div className="form-floating mb-3">
                <Field
                  id="familyNameInput"
                  className="form-control"
                  name="familyName"
                  placeholder="Family Name"
                  type="text"
                />
                <label htmlFor="familyNameInput">Family Name</label>
                {errors.familyName && touched.familyName && (
                  <span className="error">{errors.familyName}</span>
                )}
              </div>

              {/* email */}
              <div className="form-floating mb-3">
                <Field
                  id="emailInput"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <label htmlFor="emailInput">Email</label>
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              {/* current password */}
              <div className="form-floating mb-3">
                <Field
                  id="currentPasswordInput"
                  className="form-control"
                  name="currentPassword"
                  placeholder="Current Password"
                  type="password"
                />
                <label htmlFor="currentPasswordInput">Current Password</label>
                {errors.currentPassword && touched.currentPassword && (
                  <span className="error">{errors.currentPassword}</span>
                )}
              </div>

              {/* new password */}
              <div className="form-floating mb-3">
                <Field
                  id="newPasswordInput"
                  className="form-control"
                  name="newPassword"
                  placeholder="New Password"
                  type="password"
                />
                <label htmlFor="newPasswordInput">New Password</label>
                {errors.newPassword && touched.newPassword && (
                  <span className="error">{errors.newPassword}</span>
                )}
              </div>

              {/* confirm new password */}
              <div className="form-floating mb-3">
                <Field
                  id="confirmNewPasswordInput"
                  className="form-control"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  type="password"
                />
                <label htmlFor="confirmNewPasswordInput">New Password</label>
                {errors.confirmNewPassword && touched.confirmNewPassword && (
                  <span className="error">{errors.confirmNewPassword}</span>
                )}
              </div>
              {/* button */}
              <button type="submit" className="btn mt-4 form-button">
                Submit Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Account;
