import React, { useState } from 'react';
import styles from './ChatBot.module.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleChatBotClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <div className={styles.chatBotIcon} onClick={handleChatBotClick}>
        <img src="/bot.png" alt="Chat Bot" />
      </div>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>Chat Bot</div>
          <div className={styles.chatBody}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === 'user'
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;