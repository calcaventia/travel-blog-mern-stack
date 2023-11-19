import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  console.log(post);
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleClick = async () => {
    const newComments = await dispatch(commentPost(`${comment}`, post._id));

    setComment("");
    setComments(newComments);
  };

  return (
    <div>
      <h5>Comments</h5>
      <textarea
        className="write-comment"
        placeholder="Write a Comment"
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <br />
      <button disabled={!comment} onClick={handleClick}>
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
