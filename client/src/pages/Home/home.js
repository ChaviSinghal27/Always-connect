import { useContext } from "react";
import Feed from "../../components/feed/feed";
import FollowCard from "../../components/followCard/followcard";
import Leftbar from "../../components/leftbar/leftbar";

import "./home.css";
import { AuthContext } from "../../context/authContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="home-components">
        <div className="leftbarComponent">
          <Leftbar />
        </div>
        <div className="feed-component">
          <Feed id={user._id} />
        </div>
        <div className="follow-component">
          <FollowCard user={user} />
        </div>
      </div>
    </div>
  );
}
