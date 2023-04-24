import "./App.css";
import SearchContacts from "./components/search-contacts-field/SearchContacts";
import { ContactsList } from "./components/contacts-list/ContactsList";
import { ChatTitleField } from "./components/chat-title-field/ChatTitleField";
import { MessageField } from "./components/message-field/MessageField";
import { MessageInput } from "./components/message-input/MessageInput";

function App() {
  return (
    <div className="App">
      <div className="contacts-container">
        <SearchContacts />
        <ContactsList />
      </div>
      <div className="message-container">
        <ChatTitleField />
        <MessageField />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;
