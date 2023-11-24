import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  console.log(post);
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleClick = async () => {
    const finalComment = `${author}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));

    setAuthor("");
    setComment("");
    setComments(newComments);
  };

  return (
    <div>
      <h5>Comments</h5>
      <div className="comment-author">
        <input
          type="text"
          className="author-input"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="comment-content">
        <textarea
          className="write-comment"
          placeholder="Write a Comment"
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button className="comment-btn" disabled={!comment} onClick={handleClick}>
        Submit
      </button>
      <div className="comment-display-box">
        {comments
          ?.slice()
          .reverse()
          .map((c, i) => (
            <p key={i}>{c}</p>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
