import React from 'react';

function MessageList({ messages, onDelete }) {
  const handleDelete = (id, sender) => {
    if (sender === 'auto') return;
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este mensaje?");
    if (confirmar) {
      onDelete(id);
    }
  };

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`mensaje ${msg.sender === 'yo' ? 'derecha' : 'izquierda'}`}
        >
          {msg.sender === "auto" && <span> </span>}
          {msg.text}
          {msg.sender !== 'auto' && (
            <button
              className="btn-eliminar"
              onClick={() => handleDelete(msg.id, msg.sender)}
              title="Eliminar mensaje"
            >
              🗑️
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
