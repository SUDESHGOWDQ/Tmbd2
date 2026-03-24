import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from '../../utils/ValidationSchema';
import "./index.css";

const Login = () => {
  const { login } = useContext(MovieContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const success = login(values.username, values.password);
      if (success) {
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </form>
		<div>use name as user</div>
		<div>use password as user123</div>
      </div>
    </div>
  );
};

export default Login;