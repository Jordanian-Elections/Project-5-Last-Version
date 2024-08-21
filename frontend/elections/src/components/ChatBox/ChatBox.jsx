import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChatBox = () => setIsOpen(!isOpen);

  async function chatuser(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("لم يتم العثور على توكن. يرجى تسجيل الدخول مرة أخرى.");
        return;
      }

      await axios.post(
        "http://localhost:4003/api/chat/add-message",
        { UserMessage: inputMessage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInputMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Error sending message:", err);
      if (err.response && err.response.status === 401) {
        alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
      }
    }
  }

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get(
        "http://localhost:4003/api/chat/getmessages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const sortedMessages = response.data.sort((a, b) => a.M_Id - b.M_Id);
      setMessages(sortedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);

      if (error.response && error.response.status === 401) {
        alert("جلسة المستخدم منتهية. يرجى تسجيل الدخول مرة أخرى.");
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChatBox}
          className="bg-zait text-white rounded-full p-3 shadow-lg hover:bg-zait-dark transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-80 flex flex-col h-[450px] border border-gray-300">
          <div className="bg-zait text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold tracking-wide">Chat</h3>
            <button
              onClick={toggleChatBox}
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.M_Id}
                className={`mb-2 ${message.admin ? "text-left" : "text-right"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.admin
                      ? "bg-zait-light text-gray-800"
                      : "bg-zait-dark text-white"
                  } max-w-[75%]`}
                >
                  {message.Message}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={chatuser}
            className="border-t p-2 flex bg-gray-100 rounded-b-lg"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zait"
            />
            <button
              type="submit"
              className="bg-zait text-white px-4 py-2 rounded-r-lg hover:bg-zait-dark focus:outline-none focus:ring-2 focus:ring-zait transition-colors"
            >
              إرسال
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
