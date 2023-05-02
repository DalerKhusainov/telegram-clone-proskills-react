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

// const messages = [
//   {
//     userId: ''
//   }
// ];

const AppArea = ({ user }) => {
  const [allContacts, setAllContacts] = useState(contacts1);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);
  const [selectedContact, setSelectedContact] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [chatMessages, setChatMessages] = useState("");
  const [chatSenderImg, setChatSenderImg] = useState("");
  const [menuTransformValue, setMenuTransformValue] = useState("100");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [fontColorDark, setFontColorDark] = useState("#343a40");
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState("#fff");
  const [hamburgerMenuColor, setHamburgerMenuColor] = useState("#343a40");
  const [searchContactsBackgroundColor, setSearchContactsBackgroundColor] =
    useState("#f1f3f5");
  const [allUsersContacts, setAllUsersContacts] = useState([
    ...contacts1,
    ...contacts2,
    ...contacts3,
  ]);

  //////////////////////////////////////////////////////////////////////////
  ///// FILTER METHOD WHICH TAKES VALUE FROM LOGIN COMPONENT AND FILTER THE CURRNET
  ///// ACCOUNT TO THE APP
  useEffect(() => {
    const logedUser = allUsersContacts.filter(
      (userName) => userName.owner === setFirstName(user)
    );
    setAllContacts(logedUser);
    setFilteredContacts(logedUser);
    setChatMessages(logedUser[0].lastMessage);
    setChatSenderImg(logedUser[0].contactImgUrl);
  }, [allUsersContacts, user]);

  //////////////////////////////////////////////////////////////////////////
  ///// CLICK HANDLER WHICH SELECT A CONTACT AND DISPLAYS IT TO MESSAGE FIELD
  ///// ALSO IT SETS DEFAULT MESSAGE TO MESSAGE FIELD
  const onContactClickHandler = (id) => {
    const newSelectedContact = filteredContacts.filter(
      (contact) => contact.contactId === id
    );
    setSelectedContact(newSelectedContact);
    setChatMessages(newSelectedContact[0].lastMessage);
    setChatSenderImg(newSelectedContact[0].contactImgUrl);
  };

  //////////////////////////////////////////////////////////////////////////
  ///// THE INPUT HANDLER WHICH TAKES VALUE FROM SEARCH CONTACTS FIELD
  const onSearchHandler = (e) => {
    const newSearchValue = e.target.value.toLocaleLowerCase();
    setSearchValue(newSearchValue);
  };

  //////////////////////////////////////////////////////////////////////////
  ///// SEARCH HANDLER FOR FILTERING THE CONTACTS
  useEffect(() => {
    const newFilteredContact = allContacts.filter((contact) =>
      contact.contactFirstName.toLocaleLowerCase().includes(searchValue)
    );
    setFilteredContacts(newFilteredContact);
  }, [allContacts, searchValue]);

  const onNightModeHandler = (e) => {
    const isOn = e.target.checked;
    if (isOn === true) {
      setBackgroundColor("#333464");
      setFontColorDark("#868e96");
      setSearchContactsBackgroundColor("#868e96");
      setHamburgerMenuColor("#868e96");
    } else {
      setBackgroundColor("#f8f9fa");
      setFontColorDark("#343a40");
      setSearchContactsBackgroundColor("#f1f3f5");
      setHamburgerMenuColor("#343a40");
    }
  };

  return (
    <>
      <div className="container">
        <MenuSeсtion
          menuTransformValue={menuTransformValue}
          setMenuTransformValue={setMenuTransformValue}
          user={user}
          onNightModeHandler={onNightModeHandler}
          backgroundColor={backgroundColor}
          fontColorDark={fontColorDark}
        />
        <div className="menu-area-2">Menu Area</div>
        <div className="app-area">
          <div
            className="contacts-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <SearchContacts
              onSearchHandler={onSearchHandler}
              menuTransformValue={menuTransformValue}
              setMenuTransformValue={setMenuTransformValue}
              searchContactsBackgroundColor={searchContactsBackgroundColor}
              hamburgerMenuColor={hamburgerMenuColor}
            />
            <ContactsList
              contacts={filteredContacts}
              onContactClickhandler={onContactClickHandler}
              fontColorDark={fontColorDark}
              hoverBackgroundColor={hoverBackgroundColor}
              setHoverBackgroundColor={setHoverBackgroundColor}
            />
          </div>
          <div
            className="message-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <ChatTitleField
              selectedContact={selectedContact}
              fontColorDark={fontColorDark}
            />
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
