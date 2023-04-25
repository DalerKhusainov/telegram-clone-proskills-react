import React from "react";
import "./message-field.styles.css";

export const MessageField = () => {
  return (
    <div className="message-field">
      <div className="sender-message-container">
        <div className="sender-message-img"></div>
        <div className="message">
          <div className="sender-message-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <p className="message-date">12:20</p>
        </div>
      </div>
      <div className="receiver-message-container">
        <div className="receiver-message-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit
          amet purus gravida quis blandit turpis.
        </div>
        <p className="message-date">12:35</p>
      </div>
    </div>
  );
};
