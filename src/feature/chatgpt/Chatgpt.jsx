import React, { useEffect, useRef, useState } from "react";
import {
  FiSend,
  FiPlus,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function Chatgpt() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "assistant",
      text: "Hello — I’m an example assistant. Ask me anything!",
      time: "10:00",
    },
    {
      id: 2,
      from: "user",
      text: "Show me a responsive ChatGPT-like UI using only classes.",
      time: "10:01",
    },
    {
      id: 3,
      from: "assistant",
      text: "Done — this UI uses Tailwind classes and supports clean responsiveness.",
      time: "10:02",
    },
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMsg = {
      id: Date.now(),
      from: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((m) => [...m, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "assistant",
          text: "This is a sample answer generated to show the chat bubble style.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 700);
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 flex flex-col">
      <div className="flex flex-1 h-screen overflow-hidden">
        <aside
          className={`fixed md:relative top-0 left-0 w-64 md:w-64 bg-white dark:bg-slate-900/80 border-r border-gray-200 dark:border-gray-400 z-20 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="px-4 py-3 flex items-center justify-between md:flex-col md:items-start gap-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                AI
              </div>
              <div className="hidden md:block">
                <h3 className="text-lg font-semibold dark:text-slate-300 mb-0">ChatGPT Clone</h3>
                <p className="text-xs text-gray-500 dark:text-slate-300 mb-0">Assistant + Chats</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:mt-4">
              <button
                title="New chat"
                onClick={clearChat}
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white hover:opacity-90 text-sm"
              >
                <FiPlus /> New
              </button>

              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <FiChevronLeft />
              </button>
            </div>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100%-90px)]">
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-200 dark:border-gray-400 px-3 py-2 text-sm bg-gray-50 dark:bg-slate-900 placeholder-gray-400"
                placeholder="Search conversations"
              />
              <div className="absolute right-2 top-3 text-gray-400">
                <FiSearch />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    U
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm truncate dark:text-slate-400">
                        Conversation {i}
                      </span>
                      <span className="text-xs text-gray-400">10:{i}0</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      Last message preview goes here.
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="w-[60%] md:hidden fixed top-[12%] left-[21%] right-0 bg-white dark:bg-slate-900 flex items-center justify-between py-1 px-3 z-10">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            <FiChevronRight className="dark:text-slate-400"/>
          </button>
          <div className="font-semibold text-slate-800 dark:text-slate-400">ChatGPT Clone</div>
          <div className="w-6" />
        </div>

        <main className="flex-1 flex flex-col mt-12 md:mt-0 bg-white ">
          <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-400 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold dark:text-slate-300">Conversation</h2>
              <span className="text-sm text-gray-500">AI assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-md border border-gray-200 text-sm dark:text-slate-300">
                Export
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-200 text-sm dark:text-slate-300">
                Settings
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gray-50 dark:bg-slate-900"
          >
            {messages.length === 0 && (
              <div className="text-center text-sm text-gray-500 mt-12">
                No messages yet — say hello 👋
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[43%] ${
                  msg.from === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-2xl leading-relaxed break-words ${
                    msg.from === "user"
                      ? "bg-indigo-600 text-white  rounded-br-none"
                      : "bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-400 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap dark:text-slate-400">{msg.text}</div>
                  <div
                    className={`text-[11px] mt-2 ${
                      msg.from === "user"
                        ? "text-indigo-100"
                        : "text-gray-400 "
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="px-4 py-3 border-t border-gray-200 dark:border-gray-400 bg-white dark:bg-slate-900"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                title="Attachment"
                className="p-2 rounded-md border border-gray-200 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-600"
              >
                <FiPlus className="dark:text-slate-300"/>
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-gray-200 dark:border-gray-400 px-4 py-2 bg-gray-50 dark:bg-slate-900 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-indigo-600 text-white hover:opacity-90"
              >
                <FiSend />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
