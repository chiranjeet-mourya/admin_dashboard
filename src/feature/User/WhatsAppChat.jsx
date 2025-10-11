import React, { useRef, useState } from "react";
import { FaPaperPlane, FaPaperclip, FaSmile } from "react-icons/fa";
import user from "../../assets/avatar.jpg";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Picker from "emoji-picker-react";

const contactsData = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey!",
    online: true,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "See you soon",
    online: false,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    lastMessage: "Okay",
    online: true,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Alice Brown",
    lastMessage: "Let's meet tomorrow",
    online: true,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Lee",
    lastMessage: "Got it!",
    online: false,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Emma Wilson",
    lastMessage: "Thanks for your help",
    online: true,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "David Miller",
    lastMessage: "See you later",
    online: false,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Sophia Davis",
    lastMessage: "Okay, perfect",
    online: true,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Chris Evans",
    lastMessage: "Can we talk?",
    online: true,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    lastMessage: "See you soon!",
    online: false,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const WhatsAppChat = () => {
  const [contacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "other" },
    { id: 2, text: "Hi, how are you?", sender: "me" },
    { id: 3, text: "I'm good, thanks!", sender: "other" },
    { id: 2, text: "where are you from?", sender: "me" },
    { id: 3, text: "I'm from Noida!", sender: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: messages.length + 1, text: newMessage, sender: "me" },
    ]);
    setNewMessage("");
  };

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    let matchesFilter = true;

    if (activeFilter === "Read") matchesFilter = contact.read === true;
    if (activeFilter === "Unread") matchesFilter = contact.read === false;
    if (activeFilter === "Group") matchesFilter = contact.group === true;

    return matchesSearch && matchesFilter;
  });

  const filters = ["All", "Read", "Unread", "Group"];

  const handleEmojiClick = (emojiData) => {
    setNewMessage(newMessage + emojiData.emoji);
  };

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const fileData = {
      id: messages.length + 1,
      sender: "me",
      file: URL.createObjectURL(file),
      fileName: file.name,
      isImage,
    };

    setMessages([...messages, fileData]);
  };

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 md:h-[80vh] h-[100%]">
      <div className="w-1/3 border-r dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between p-4 relative">
          <h2 className="font-bold text-lg text-gray-800 dark:text-white">
            Chats
          </h2>

          <button
            onClick={toggleMenu}
            className="w-[30px] h-[30px] bg-slate-100/50 rounded text-slate-800 flex items-center justify-center"
          >
            <FaBars size={20} />
          </button>

          {open && (
            <div className="top-12 absolute right-0 w-50 h-[130px] bg-white dark:bg-gray-800 shadow-lg p-4 z-50">
              <ul className="flex flex-col gap-3">
                <li className="dark:text-slate-300 cursor-pointer">Home</li>
                <li className="dark:text-slate-300 cursor-pointer">Profile</li>
                <li className="dark:text-slate-300 cursor-pointer">Settings</li>
              </ul>
            </div>
          )}
        </div>

        <div className="p-2">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="flex gap-2 p-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 px-3 py-1 rounded-md text-sm font-medium border transition ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="h-[350px] overflow-y-auto">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedContact.id === contact.id
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-full overflow-hidden`}>
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {contact.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {contact.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full overflow-hidden`}>
              <img
                src={user}
                alt={user}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-800 dark:text-white">
                {selectedContact.name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedContact.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleCallClick("audio")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaPhoneAlt className="text-gray-800 dark:text-white" />
            </button>
            <button
              onClick={() => handleCallClick("video")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaVideo className="text-gray-800 dark:text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4 h-[400px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.text && (
                <div
                  className={`p-2 rounded-lg max-w-xs break-words ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              )}

              {msg.file && (
                <div
                  className={`p-2 rounded-lg max-w-xs break-words ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.isImage ? (
                    <img
                      src={msg.file}
                      alt={msg.fileName}
                      className="w-48 h-auto rounded"
                    />
                  ) : (
                    <a
                      href={msg.file}
                      download={msg.fileName}
                      className="underline hover:text-blue-200"
                    >
                      {msg.fileName}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center p-2 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <FaSmile />
          </button>

          {showPicker && (
            <div className="absolute bottom-16 right-0 z-50">
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <button
            onClick={handleFileClick}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <FaPaperclip />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 mx-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="p-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
