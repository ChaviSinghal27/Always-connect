import { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { usePost } from "../../context/postContext";
export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  const {
    dispatch,
    state: { bookmark },
  } = usePost();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = async () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const clickHandler = () => {
    dispatch({ type: "BOOKMARK", payload: post._id });
  };

  const color = bookmark.includes(post._id) ? "#3b82f6" : "black";

  return (
    <div>
      <div className="feed-card">
        <div key={post._id} className="feeds">
          <div className="postWrapper">
            <div className="postTop"></div>
            <div className="postTopLeft">
              <div>
                <Link to={`/profile/${user.username}`}>
                  <img
                    alt=""
                    className="postProfileImg"
                    src={
                      currentUser.profilePicture
                        ? PF + currentUser.profilePicture
                        : PF + "person/no avatar.png"
                    }
                  />
                </Link>
              </div>
              <span>{user.username}</span>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              {post.img ? (
                <img alt="" className="postImg" src={PF + post.img} />
              ) : (
                ""
              )}
            </div>
            <div className="post-actions">
              <div>
                <button
                  style={{ color: isLiked ? "#3b82f6" : "black" }}
                  onClick={likeHandler}
                  className="likeButton"
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                <span> {like}</span>
              </div>

              <button
                style={{ color: color }}
                className="bookmarkButton"
                onClick={clickHandler}
              >
                <i class="fa-solid fa-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
