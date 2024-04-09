import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import "./share.css";
export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className="share">
      <div>
        <div className="shareTop">
          <img
            alt=""
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/no avatar.png"
            }
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder={"What's in your Mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareIcons">
            <div>
              <label htmlFor="file">
                <i className="fa-solid fa-photo-film"></i>

                <span>Photo</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>

            <div>
              <i class="fa-solid fa-location-dot"></i>
              <span>Location</span>
            </div>
            <div>
              <i class="fa-solid fa-face-smile"></i>
              <span>feelings</span>
            </div>
          </div>

          <div>
            <button type="submit" className="shareButton">
              share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
