import React from "react";
import "./styles.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../../images/plane.jpg";

const Post = ({ post, setCurrentId }) => {
  library.add(fas, faTwitter, faFontAwesome);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openPost = () => navigate(`/posts/${post._id}`);
  const displayShortContent = (content) => {
    if (typeof content !== "string") {
      return ""; // Return an empty string or handle the non-string case
    }
    const words = content.split(" ");
    const truncated = words.slice(0, 20).join(" ");
    return `${truncated}${words.length > 20 ? "..." : ""}`;
  };

  return (
    <div className="custom-card">
      <div className="link-post" onClick={openPost}>
        <img
          className="card-image"
          src={post.selectedFile || defaultImage}
          alt={post.title}
        />
        <div className="overlay">
          <h6 className="creator">{post.creator}</h6>
          <p className="createdAt">{moment(post.createdAt).fromNow()}</p>
        </div>

        <div className="details"></div>
        <h5 className="title">{post.title}</h5>
        <div className="content">
          <p className="message">{displayShortContent(post.message)}</p>
        </div>
      </div>

      <div className="buttons">
        <div className="editing-button">
          <button
            className="edit-button"
            onClick={() => setCurrentId(post._id)}
          >
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            Edit
          </button>
        </div>
        <div className="cardActions">
          <button
            className="deleteButton"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
