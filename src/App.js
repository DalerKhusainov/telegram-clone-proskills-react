import "./App.css";
import { useState } from "react";
import SearchContacts from "./components/search-contacts-field/SearchContacts";
import { ContactsList } from "./components/contacts-list/ContactsList";
import { ChatTitleField } from "./components/chat-title-field/ChatTitleField";
import { MessageField } from "./components/message-field/MessageField";
import { MessageInput } from "./components/message-input/MessageInput";
import { contacts } from "./data/contacts";

function App() {
  const [selectedContact, setSelectedContact] = useState([]);

  const onContactClickhandler = (id) => {
    const newSelectedContact = contacts.filter(
      (contact) => contact.contactId === id
    );
    setSelectedContact(newSelectedContact);
  };

  return (
    <div className="App">
      <div className="contacts-container">
        <SearchContacts />
        <ContactsList
          contacts={contacts}
          onContactClickhandler={onContactClickhandler}
        />
      </div>
      <div className="message-container">
        <ChatTitleField selectedContact={selectedContact} />
        <MessageField />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;
