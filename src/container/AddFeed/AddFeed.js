import React from "react";
import "./AddFeed.css";
import { Avatar } from "@material-ui/core";
function AddFeed() {
  return (
    <div className="addfeed-container">
      <div className="addfeed-first-row">
        <p className="addfeed-title">Add to your feed</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          className="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
        </svg>
      </div>
      <div className="recommend-sub">
        <Avatar>#</Avatar>
        <div className="recommend-info">
          <div className="recommend-name">#programming</div>
          <button className="follow-buttom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            Follow
          </button>
        </div>
      </div>
      <div className="recommend-sub">
        <Avatar>CM</Avatar>
        <div className="recommend-info">
          <div className="recommend-name">Clement Minlan</div>
          <div className="recomment-summary">Student at K University</div>
          <button className="follow-buttom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            Follow
          </button>
        </div>
      </div>
      <div className="recommend-sub">
        <Avatar>Co</Avatar>
        <div className="recommend-info">
          <div className="recommend-name">A company</div>
          <div className="recomment-summary">Company · IT</div>
          <button className="follow-buttom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFeed;
