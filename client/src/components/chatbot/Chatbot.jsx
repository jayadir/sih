import React from 'react';
import styles from './ChatBot.module.css';

const ChatBot = () => {
  const handleChatBotClick = () => {
    alert('Chat bot clicked!');
  };

  return (
    <div className={styles.chatBotIcon} onClick={handleChatBotClick}>
      <img src="/bot.png" alt="Chat Bot" />
    </div>
  );
};

export default ChatBot;