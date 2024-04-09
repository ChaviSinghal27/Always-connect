import Post from "../post/post";
import Share from "../share/share";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import createdAt from "react";
export default function Feed({ username, id }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2 - createdAt) - new Date(p1 - createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user._id]);
  return (
    <div>
      {id === user._id && <Share />}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
