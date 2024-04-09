import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./profile.css";
import Leftbar from "../../components/leftbar/leftbar";
import FollowCard from "../../components/followCard/followcard";
import Feed from "../../components/feed/feed";
import { AuthContext } from "../../context/authContext";

export default function Profile() {
  const [nonFriends, setNonFriends] = useState([]);
  const updateNonFriends = (updateNonFriends) => {
    setNonFriends(updateNonFriends);
  };
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
  const [user, setUser] = useState({});
  const [followed, setFollowed] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user._id));
  }, [currentUser, user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });

        dispatch({ type: "UNFOLLOW", payload: user._id });
        updateNonFriends(
          nonFriends.filter((friend) => friend._id !== user._id)
        );
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  return (
    <div className="profilePage">
      <div className="profileLeft">
        <Leftbar />
      </div>
      <div className="profileMiddle">
        <div className="profileMidTop">
          <div className="coverImg">
            <img
              className="userCover"
              src={
                user.coverPicture
                  ? PF + user.coverPicture
                  : PF + "person/no cover.png"
              }
            />
          </div>
          <div className="profileMidBottom">
            <div className="profileImgDiv">
              <img
                alt=""
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/no avatar.png"
                }
                className="profileImg"
              />
            </div>
            <div className="userName">{user.username}</div>
            <div className="userDesc"> {user.desc} </div>
            <div className="aboutUser">
              <div>
                <h4>Followers</h4>
                {user.followers ? user.followers.length : 0}
              </div>
              <div>
                <h4>Followings </h4>
                {user.followings ? user.followings.length : 0}{" "}
              </div>
              <div>
                {user.username !== currentUser.username && (
                  <button className="followButton" onClick={handleClick}>
                    {followed ? "unfollow" : "follow"}
                  </button>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Feed username={username} id={user._id} />
        </div>
      </div>
      <div className="profileRight">
        <FollowCard user={currentUser} updateNonFriends={updateNonFriends} />
      </div>
    </div>
  );
}
