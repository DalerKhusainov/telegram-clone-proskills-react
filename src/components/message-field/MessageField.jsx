import React from "react";
import "./message-field.styles.css";

export const MessageField = ({ chatMessages, chatSenderImg }) => {
  return (
    <div className="message-field">
      <div className="sender-message-container">
        <img
          className="sender-message-img"
          alt="contactPhoto"
          src={chatSenderImg}
        />
        <div className="message">
          <div className="sender-message-text">{chatMessages}</div>
          <p className="message-date">12:20</p>
        </div>
      </div>
      {/* <div className="receiver-message-container">
        <div className="receiver-message-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit
          amet purus gravida quis blandit turpis.
        </div>
        <p className="message-date">12:35</p>
      </div> */}
    </div>
  );
};
