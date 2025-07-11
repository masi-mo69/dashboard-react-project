import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const HelpChatPopup = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 سلام! چطور می‌تونم کمکت کنم؟" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages(prev => [...prev, { from: "user", text: newMessage }]);
    setNewMessage("");

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "✅ پیامت دریافت شد! به زودی پاسخ میدیم." }]);
    }, 500);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      ></div>

    
      <div className="fixed bottom-20 left-6 w-80 bg-white border rounded-xl shadow-lg z-50 flex flex-col h-96 overflow-hidden">
    
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="font-bold text-gray-800">نیاز به کمک داری؟</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

       
        <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-[80%] ${msg.from === "user" ? "bg-purple-100 self-end ml-auto" : "bg-gray-100 self-start mr-auto"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

      
        <div className="flex items-center p-2 border-t">
          <input
            type="text"
            className="flex-1 text-sm p-2 border rounded-lg mr-2"
            placeholder="پیام بنویس..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg"
          >
            ارسال
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpChatPopup;
