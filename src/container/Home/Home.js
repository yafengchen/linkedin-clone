import React from "react";
import AddFeed from "../AddFeed/AddFeed";
import BriefProfile from "../BriefProfile/BriefProfile";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import Recent from "../Recent/Recent";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <BriefProfile />
        <Recent />
      </div>
      <div className="home-middle">
        <NewPost />
        <Posts />
      </div>
      <div className="home-right">
        <AddFeed />
      </div>
    </div>
  );
}

export default Home;
