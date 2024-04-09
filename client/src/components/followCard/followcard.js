import { Link } from "react-router-dom";

import "./followcard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FollowCard({ user, updateNonFriends }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [nonFriends, setNonFriends] = useState([]);

  useEffect(() => {
    const getNonFriends = async () => {
      try {
        const nonFriendList = await axios.get("/users/notfriends/" + user._id);
        setNonFriends(nonFriendList.data);
        updateNonFriends(nonFriendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    console.log("hello");
    getNonFriends();
  }, [user._id, updateNonFriends]);
  console.log(nonFriends);
  return (
    <div>
      <div className="follow-card-component">
        <div className="followcardWrapper">
          <h2>Suggestions To Follow</h2>
          <div>
            {nonFriends?.map((user) => (
              <Link to={`/profile/${user.username}`}>
                <div key={user._id} className="follow-card">
                  <div>
                    <img
                      alt=""
                      src={
                        user.profilePicture
                          ? PF + user.profilePicture
                          : PF + "person/no avatar.png"
                      }
                      className="profile-img"
                    />
                  </div>

                  <div>
                    <div>{user.username}</div>
                    <div style={{ color: "grey" }}> {user.username}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
