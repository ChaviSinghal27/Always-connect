import { Link } from "react-router-dom";
import "./leftbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Leftbar() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="leftbar">
        <div className="leftbarWrapper">
          <Link to="/feed" className="leftbar-component">
            <div className="leftbar-icon">
              <i class="fa-solid fa-house"></i>
            </div>
            <div className="leftbar-text">Feed</div>
          </Link>
          <Link to="/explore" className="leftbar-component">
            <div>
              <i class="fa-solid fa-hashtag"></i>
            </div>
            <div className="leftbar-text"> Explore</div>
          </Link>
          <Link to="/bookmark" className="leftbar-component">
            <div>
              <i class="fa-solid fa-bookmark"></i>
            </div>
            <div className="leftbar-text"> Bookmarks</div>
          </Link>
          <Link to={`/profile/${user.username}`} className="leftbar-component">
            <div>
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="leftbar-text">Profile</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
