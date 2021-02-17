import React, { useState, useEffect } from "react";
import "./Recent.css";

function Recent() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => window.addEventListener("scroll");
  }, []);

  return (
    <div className={`recent-container ${show && "recent-container-sticky"}`}>
      <div className="recent">
        <p className="recent-title">Recent</p>
        <div className="recent-subs">
          <div className="recent-sub">
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
              <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
              <circle cx="8" cy="4" r="2"></circle>
              <circle cx="12.5" cy="5.5" r="1.5"></circle>
              <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
              <circle cx="3.5" cy="5.5" r="1.5"></circle>
            </svg>
            <p className="group-name">XXX group</p>
          </div>
          <div className="recent-sub">
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
              <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
              <circle cx="8" cy="4" r="2"></circle>
              <circle cx="12.5" cy="5.5" r="1.5"></circle>
              <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
              <circle cx="3.5" cy="5.5" r="1.5"></circle>
            </svg>
            <p className="group-name">XXX group</p>
          </div>
        </div>
      </div>
      <div className="followed-groups">
        <p className="followed-group-title">Groups</p>
        <div className="group-sub">
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
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
          </svg>
          <p className="group-name">XXX group</p>
        </div>
        <div className="group-sub">
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
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
          </svg>
          <p className="group-name">XXX group</p>
        </div>
        <div className="see-all">
          <p>See all</p>
        </div>
      </div>
      <div className="events">
        <p className="events-title">Events</p>
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
      </div>
      <div className="hashtags">
        <p className="followed-hashtags">Followed Hashtags</p>
      </div>
    </div>
  );
}

export default Recent;
