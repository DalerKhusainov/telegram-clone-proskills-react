import "./App.css";
import { useState, useEffect } from "react";
import SearchContacts from "./components/search-contacts-field/SearchContacts";
import { ContactsList } from "./components/contacts-list/ContactsList";
import { ChatTitleField } from "./components/chat-title-field/ChatTitleField";
import { MessageField } from "./components/message-field/MessageField";
import { MessageInput } from "./components/message-input/MessageInput";
import { contacts } from "./data/contacts";

function App() {
  const [allContacts, setAllContacts] = useState(contacts);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);
  const [selectedContact, setSelectedContact] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [chatMessages, setChatMessages] = useState("");
  const [chatSenderImg, setChatSenderImg] = useState("");

  const onContactClickhandler = (id) => {
    const newSelectedContact = contacts.filter(
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
    <div className="App">
      <div className="contacts-container">
        <SearchContacts onSearchHandler={onSearchHandler} />
        <ContactsList
          contacts={filteredContacts}
          onContactClickhandler={onContactClickhandler}
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
  );
}

export default App;
