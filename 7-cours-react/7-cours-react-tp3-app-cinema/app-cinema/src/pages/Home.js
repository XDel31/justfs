import React from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="home-navigation">
          <Navigation />
        </div>
        <div className="title">
          <h1>React Movies</h1>
        </div>
      </div>
      <div className="detail-container">
        <Movies />
      </div>
    </div>
  );
};

export default Home;
