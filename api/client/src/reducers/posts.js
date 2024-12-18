import {
  FETCH_ALL,
  FETCH_POST,
  CREATE,
  COMMENT,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_POST:
      return { ...posts, post: action.payload };

    case CREATE:
      return [...posts, action.payload];
    case COMMENT:
      return posts.map((post) => {
        if (post._id === +action.payload._id) {
          return action.payload;
        }
        return post;
      });

    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default postsReducer;
