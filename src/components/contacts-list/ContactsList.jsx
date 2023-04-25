import React from "react";
import "./contacts-list.styles.css";
import { Contact } from "../contact/Contact";

export const ContactsList = ({ contacts, onContactClickhandler }) => {
  return (
    <div className="contacts-list">
      {contacts.map((contact) => (
        <div key={contact.contactId}>
          <Contact
            contact={contact}
            onContactClickhandler={onContactClickhandler}
          />
        </div>
      ))}
    </div>
  );
};
