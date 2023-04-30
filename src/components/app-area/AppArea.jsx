import "./app-area.styles.css";
import { useState, useEffect } from "react";
import { setFirstName } from "../../functions/functions";

import SearchContacts from "../search-contacts-field/SearchContacts";
import { ContactsList } from "../contacts-list/ContactsList";
import { ChatTitleField } from "../chat-title-field/ChatTitleField";
import { MessageField } from "../message-field/MessageField";
import { MessageInput } from "../message-input/MessageInput";
import { MenuSeсtion } from "../menu-section/MenuSeсtion";

import { contacts1 } from "../../data/contacts";
import { contacts2 } from "../../data/contacts";
import { contacts3 } from "../../data/contacts";

const AppArea = ({ user }) => {
  const [allContacts, setAllContacts] = useState(contacts1);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);
  const [selectedContact, setSelectedContact] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [chatMessages, setChatMessages] = useState("");
  const [chatSenderImg, setChatSenderImg] = useState("");
  const [menuTransformValue, setMenuTransformValue] = useState("100");
  const [allUsersContacts, setAllUsersContacts] = useState([
    ...contacts1,
    ...contacts2,
    ...contacts3,
  ]);

  useEffect(() => {
    const logedUser = allUsersContacts.filter(
      (userName) => userName.owner === setFirstName(user)
    );
    setAllContacts(logedUser);
    setFilteredContacts(logedUser);
    setChatMessages(logedUser[0].lastMessage);
    setChatSenderImg(logedUser[0].contactImgUrl);
  }, [allUsersContacts, user]);

  const onContactClickHandler = (id) => {
    const newSelectedContact = filteredContacts.filter(
      (contact) => contact.contactId === id
    );
    setSelectedContact(newSelectedContact);
    setChatMessages(newSelectedContact[0].lastMessage);
    setChatSenderImg(newSelectedContact[0].contactImgUrl);
  };

  const onSearchHandler = (e) => {
    const newSearchValue = e.target.value.toLocaleLowerCase();
    setSearchValue(newSearchValue);
  };

  useEffect(() => {
    const newFilteredContact = allContacts.filter((contact) =>
      contact.contactFirstName.toLocaleLowerCase().includes(searchValue)
    );
    setFilteredContacts(newFilteredContact);
  }, [allContacts, searchValue]);

  return (
    <>
      <div className="container">
        <MenuSeсtion
          menuTransformValue={menuTransformValue}
          setMenuTransformValue={setMenuTransformValue}
          user={user}
        />
        <div className="menu-area-2">Menu Area</div>
        <div className="app-area">
          <div className="contacts-container">
            <SearchContacts
              onSearchHandler={onSearchHandler}
              menuTransformValue={menuTransformValue}
              setMenuTransformValue={setMenuTransformValue}
            />
            <ContactsList
              contacts={filteredContacts}
              onContactClickhandler={onContactClickHandler}
            />
          </div>
          <div className="message-container">
            <ChatTitleField selectedContact={selectedContact} />
            <MessageField
              chatMessages={chatMessages}
              chatSenderImg={chatSenderImg}
            />
            <MessageInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppArea;
