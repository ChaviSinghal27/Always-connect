import Post from "../../components/post/post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import createdAt from "react";
import "./explore.css";
import Leftbar from "../../components/leftbar/leftbar";
export default function Explore() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2 - createdAt) - new Date(p1 - createdAt);
        })
      );
    };
    fetchPost();
  }, [user._id]);
  return (
    <div className="leftbar-wrapper">
      <div className="leftbar-left">
        <Leftbar />
      </div>
      <div className="leftbar-right">
        <div className="header">EXPLORE</div>
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
