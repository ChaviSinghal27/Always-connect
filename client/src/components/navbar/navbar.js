import { useContext } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar-left">Always Connect</div>
        <div className="navbar-middle"></div>
        <div className="navbar-right">
          <div>Account</div>
          {user && user.username ? (
            <div>
              <Link to={`/profile/${user.username}`}>
                <img
                  alt=""
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/no avatar.png"
                  }
                />
              </Link>
            </div>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
