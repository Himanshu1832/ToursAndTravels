

import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/authContext";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  // const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(inputs);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };
  return (
    <div className="auth">
      <form>
        <div className="log-container">
          <div className="log-main-container">
            <h1 className="Welcome">Login Page</h1>
            <div className="form-container">
              <form>
                <div className="input-fields">
                  <label className="label">
                    Username <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter Username"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                    Password <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="navigation">
                  <label>
                    <span>
                      Don't you have an account?{" "}
                      {/* <Link to="/phonesignup">Phone Signup</Link> */}

                      <Link to="/signup">Register</Link>
                    </span>
                  </label>
                </div>
                <div className="form-button">
                  <button
                    type="submit"
                    name="submit"
                    className="btn-submit"
                    // onClick={handleSubmit}
                  >
                    Login
                  </button>
                  {/* {err && <p>{err}</p>} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
