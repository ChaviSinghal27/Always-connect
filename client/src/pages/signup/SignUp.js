import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
export default function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <div className="signupLogo">Chavi Social Media</div>
          <div className="signupAbout">
            connect with friend and world around you.
          </div>
        </div>
        <div className="signupRight">
          <form className="signupBox" onSubmit={handleClick}>
            <input
              ref={username}
              type="text"
              placeholder="Username"
              className="signupInput"
              required
            />
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="signupInput"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="signupInput"
              minLength="6"
            />
            <input
              ref={passwordAgain}
              type="password"
              placeholder="Password Again"
              className="signupInput"
              required
            />
            <button type="submit" className="signupButton">
              Sign Up
            </button>
            <span className="signupText">Already have an account ?</span>
            <Link to="/login">
              <button className="loginButton">Log In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
