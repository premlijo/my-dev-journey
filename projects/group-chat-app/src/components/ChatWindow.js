import React, { useRef, useEffect } from 'react';

const ChatWindow = ({ messages, newMessage, onSending, onMessageChange }) => {
  const message = useRef(null);

  useEffect(() => {
    message.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <div className="message-sender">{msg.sender}</div>
            <div className="message-text">{msg.text}</div>
            <div className="message-timestamp">{msg.time}</div>
          </div>
        ))}
        <div ref={message} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSending()}
        />
        <button onClick={onSending}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
