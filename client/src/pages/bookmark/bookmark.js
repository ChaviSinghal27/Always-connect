import Post from "../../components/post/post";
import { usePost } from "../../context/postContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import createdAt from "react";
import "./bookmark.css";
import Leftbar from "../../components/leftbar/leftbar";
export default function Bookmark() {
  const {
    state: { bookmark },
  } = usePost();

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

  const bookmarkedPost = posts.filter((post) => bookmark.includes(post._id));
  console.log(bookmarkedPost);
  return (
    <div className="bookmark-wrapper">
      <div className="bookmark-left">
        <Leftbar />
      </div>
      <div className="bookmark-right">
        {bookmarkedPost.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
