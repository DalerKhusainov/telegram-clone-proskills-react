import React from "react";
import "./contact.styles.css";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__img"></div>
        <div className="contact__info">
          <p className="contact__name">Contact name</p>
          <p className="contact__message">Message</p>
        </div>
        <div className="contact__date-and-message-amount">
          <p className="contact__date">24.04.2023</p>
          <div className="contact__message-amount">255</div>
        </div>
      </div>
    </>
  );
};
