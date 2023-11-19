import React from "react";
import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Footer from "./components/Footer";
import AboutUs from "./components/aboutUs/AboutUs.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
