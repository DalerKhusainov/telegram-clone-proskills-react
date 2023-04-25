import React from "react";
import "./contact.styles.css";

export const Contact = ({ contact, onContactClickhandler }) => {
  return (
    <>
      <div
        className="contact"
        onClick={() => onContactClickhandler(contact.contactId)}
      >
        <div className="contact__img"></div>
        <div className="contact__info">
          <p className="contact__name">{`${contact.contactFirstName} ${contact.contactLastName}`}</p>
          <p className="contact__message">{contact.lastMessage}</p>
        </div>
        <div className="contact__date-and-message-amount">
          <p className="contact__date">{contact.lastMessageDate}</p>
          <div className="contact__message-amount">{contact.newMessages}</div>
        </div>
      </div>
    </>
  );
};
