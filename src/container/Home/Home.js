import React from "react";
import BriefProfile from "../BriefProfile/BriefProfile";
import Post from "../Post/Post";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <BriefProfile />
      </div>
      <div className="home-middle">
        <Post />
      </div>
      <div className="home-right"></div>
    </div>
  );
}

export default Home;
