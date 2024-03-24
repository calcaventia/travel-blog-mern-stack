import React from "react";
import "./styles.css"; // Import your CSS file
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  if (!posts.length) {
    return (
      <div className="spinner"></div> // Use the CSS class for the spinner here
    );
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post._id} className="post-item">
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
