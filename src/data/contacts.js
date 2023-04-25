import { v4 as uuid } from "uuid";
// import img from "../../public/background-img.jpg";

export const contacts = [
  {
    contactId: uuid(),
    contactFirstName: "Daler",
    contactLastName: "Khusainov",
    // contactImgUrl: { img },
    isLogin: false,
    lastMessage: "Hey there!",
    lastMessageDate: "10:20",
    newMessages: "10",
  },
  {
    contactId: uuid(),
    contactFirstName: "Imran",
    contactLastName: "Khusainov",
    // contactImgUrl: { img },
    isLogin: false,
    lastMessage: "How are you doing?",
    lastMessageDate: "yesterday",
    newMessages: "5",
  },
  {
    contactId: uuid(),
    contactFirstName: "Matin",
    contactLastName: "Khusainov",
    // contactImgUrl: { img },
    isLogin: true,
    lastMessage: "Where were you last night?",
    lastMessageDate: "20.04.2023",
    newMessages: "13",
  },
  {
    contactId: uuid(),
    contactFirstName: "Shahzoda",
    contactLastName: "Khusainova",
    // contactImgUrl: { img },
    isLogin: false,
    lastMessage: "I am very fine, and you?",
    lastMessageDate: "yesterday",
    newMessages: "2",
  },
];
