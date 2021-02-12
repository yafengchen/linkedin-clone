import { Avatar } from "@material-ui/core";
import React from "react";
import "./BriefProfile.css";
function BriefProfile() {
  return (
    <div className="briefprofile-container">
      <img
        className="briefprofile-banner"
        src="https://media-exp1.licdn.com/dms/image/C4E16AQHLH7tbF4Lizg/profile-displaybackgroundimage-shrink_200_800/0/1612699720271?e=1618444800&v=beta&t=UtJOaMkSlOe5YqXG1EQTqYd5GnOrecqmjvHoZKMw14o"
      ></img>
      <div className="briefprofile-sub">
        <div className="basic-info">
          <Avatar className="avatar" style={{ height: "70px", width: "70px" }}>
            H
          </Avatar>
          <p className="info-name">Your Name</p>
          <p className="info-summary">summary</p>
        </div>
        <div className="connection">
          <div className="connection-sub">
            <p>Connection</p>
            <p>300</p>
          </div>
          <p>Grow your network</p>
          <div className="connection-sub">
            <p>Who viewed your profile</p>
            <p>30</p>
          </div>
        </div>
        <div className="premium-tools">
          <p>Access exclusive tools & insights</p>
        </div>
        <div className="myitems">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
          </svg>
          <p>My Items</p>
        </div>
      </div>
    </div>
  );
}

export default BriefProfile;
