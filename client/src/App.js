import React from "react";
import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="home-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
