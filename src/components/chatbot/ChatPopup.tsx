
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ChatPopupProps {
  onClose: () => void;
}

const chatVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } },
};

const ChatPopup: React.FC<ChatPopupProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue.trim()]);
      setInputValue('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể."]);
      }, 1000);
    }
  };

  return (
    <motion.div
      className="fixed bottom-30 right-8 z-50 w-80 md:w-96 max-h-[60vh] bg-gray-800 rounded-3xl shadow-2xl flex flex-col"
      variants={chatVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-700 rounded-t-lg">
        <i className="text-lg bitcount-grid-double text-white">Nike bot</i>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Đóng chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center py-4">Chào bạn! Chúng tôi có thể giúp gì cho bạn?</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-3 rounded-lg max-w-[80%] ${
                index % 2 === 0 ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-700 text-gray-200 mr-auto'
              }`}
            >
              {msg}
            </div>
          ))
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center rounded-b-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          className="flex-1 bg-gray-700 text-white p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập tin nhắn của bạn..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
          aria-label="Gửi tin nhắn"
        >
          <Send size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatPopup;