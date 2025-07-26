// Chat.jsx
import React from "react";
import MessageList from "./Components/Message/MessageList";
import MessageInput from "./Components/Message/MessageInput";

function Chat({ messages, onSend, onDelete }) {
  return (
    <div className="chat-container">
      <MessageList messages={messages} onDelete={onDelete} />
      <MessageInput onSend={onSend} />
    </div>
  );
}

export default Chat;
