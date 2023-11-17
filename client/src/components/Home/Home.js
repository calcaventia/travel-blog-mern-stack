import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <h1 className="title">The Budget Techie Explorer</h1>
      <Posts setCurrentId={setCurrentId} />
      <br />
      <h2>Share your thoughts here!</h2>
      <br />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default Home;
