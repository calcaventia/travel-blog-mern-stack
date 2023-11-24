import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/posts";
import defaultImage from "../../images/plane.jpg";
import "./styles.css";
import CommentSection from "./CommentSection";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]); // Include dispatch in the dependency array

  if (!post) return null;

  return (
    <div className="single-post-container">
      <h3 className="single-post-title">{post.title}</h3>
      <div className="content-container">
        <p className="single-post-author">
          {post.creator}
          <span className="single-post-createdAt">
            {moment(post.createdAt).fromNow()}
          </span>
        </p>
      </div>

      <div className="image-single-post">
        <img
          className="image-single"
          src={post.selectedFile || defaultImage}
          alt={post.title}
        />
        <p className="single-post-content">{post.message}</p>
      </div>
      <div className="comment-box">
        <CommentSection post={post} />
      </div>
    </div>
  );
};

export default PostDetails;
