import React, { useState, useEffect } from "react";

import "./Form.css";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", message: "", selectedFile: "" });
  };

  return (
    <form className="create-container" onSubmit={handleSubmit}>
      <h3>{currentId ? "Editing" : "Create"} a Post</h3>
      <input
        className="author-input"
        type="creator"
        placeholder="Author"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
      />
      <br />
      <input
        className="title-input"
        type="title"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <br />
      <input
        className="content-input"
        type="message"
        placeholder="Content"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <br />

      <br />
      <button className="create-btn" style={{ marginTop: "5px" }}>
        Submit
      </button>
      <button
        className="clear-btn"
        style={{ marginTop: "5px" }}
        onClick={clear}
      >
        Clear
      </button>
    </form>
  );
};

export default Form;
