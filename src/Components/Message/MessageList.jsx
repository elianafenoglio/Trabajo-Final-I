// MessageList.jsx
import React from 'react';

function MessageList({ messages, onDelete }) {
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que querés eliminar este mensaje?")) {
      onDelete(id);
    }
  };

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${
            msg.sender === 'yo'
              ? 'sent'
              : msg.sender === 'auto'
              ? 'auto-response'
              : 'received'
          }`}
        >
          {msg.text}
          <button
            className="btn-eliminar"
            onClick={() => handleDelete(msg.id)}
            title="Eliminar mensaje"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
