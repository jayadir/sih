import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  const handleChatBotClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (transcript) {
      setMessages([...messages, { sender: 'user', text: transcript }]);
      SpeechRecognition.stopListening();
      // Clear the transcript after sending the message
      resetTranscript();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Browser doesn't support speech recognition.</div>;
  }

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
            <div className={styles.transcript}>
              {transcript}
            </div>
            <div className={styles.btnStyle}>
              <button onClick={startListening}>Start Listening</button>
              <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;