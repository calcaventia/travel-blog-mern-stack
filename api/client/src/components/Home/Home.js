import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import "../../styles.css";

const Home = () => {
  const imageUrl = require("../../images/travel_girls4.jpg");
  const imageUrl2 = require("../../images/hiking.jpg");
  const imageUrl3 = require("../../images/travel_pic.jpg");
  const imageUrl4 = require("../../images/girl_roof.jpg");
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <div className="hero">
        <div className="row">
          <div className="col-md-3">
            <img src={imageUrl4} alt="Travel" />
          </div>
          <div className="col-md-3">
            <img src={imageUrl} alt="Travel" />
          </div>
          <div className="col-md-3">
            <img src={imageUrl3} alt="Travel" />
          </div>
          <div className="col-md-3">
            <img src={imageUrl2} alt="Travel" />
          </div>
        </div>
      </div>
      <div className="home-container">
        <h1 className="title-home">The Budget Techie Explorer</h1>
        <Posts setCurrentId={setCurrentId} />
        <br />
        <h2 className="createPost-heading">Share your thoughts here!</h2>
        <br />
        <div className="form-container">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
