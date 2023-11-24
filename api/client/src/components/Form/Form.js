import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
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

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: "", title: "", message: "", selectedFile: "" });
  };

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

  return (
    <form className="create-container" onSubmit={handleSubmit}>
      <h3 className="form-heading">
        {currentId ? "Editing" : "Create"} a Post
      </h3>
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
      <textarea
        className="content-input"
        placeholder="Content"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      ></textarea>
      <br />
      <div>
        <label htmlFor="file"></label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div>
      <br />
      <button className="create-btn">Submit</button>
    </form>
  );
};

export default Form;
