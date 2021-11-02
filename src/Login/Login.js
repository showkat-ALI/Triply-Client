import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import "./login.css";
// login page desgine

const Login = () => {
  const { siginWithGoogle, setUser, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  return (
    <div style={{height:"100vh"}}>
      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img
            className="google-icon-svg"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google-logo"
          />
        </div>
        <p
          onClick={() => {
            siginWithGoogle()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          class="btn-text fw-bold "
        >
          <b>Sign in with Google</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
