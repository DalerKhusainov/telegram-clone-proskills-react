import "./App.css";
import SearchContacts from "./components/search-contacts-field/SearchContacts";
import { ContactsList } from "./components/contacts-list/ContactsList";

function App() {
  return (
    <div className="App">
      <div className="contacts-container">
        <SearchContacts />
        <ContactsList />
      </div>
      <div className="message-container">
        <div className="search-message-field">Search Message</div>
        <div className="messages-field">Messages Field</div>
        <div className="message-input">Message Input</div>
      </div>
    </div>
  );
}

export default App;
