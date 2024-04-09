import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/authContext";
import "./login.css";
import { useContext, useRef } from "react";
export default function Login() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const password = useRef();
  const email = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">Chavi Social Media</div>
          <div className="loginAbout">
            connect with friend and world around you.
          </div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              required
              ref={email}
              placeholder="Email"
              className="loginInput"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="password"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              {isFetching ? "loading" : "Log In"}
            </button>
            <span className="loginText">Don't have an account ?</span>
            <button className="signupButton">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
