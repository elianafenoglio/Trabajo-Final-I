// ChatScreen.jsx
import React from "react";
import Chat from "../Chat";
import "../style.css";

const ChatScreen = ({ contacto, mensajes, onEnviarMensaje, onEliminarMensaje }) => {
  return (
    <div className="chat-screen">
      <div className="chat-header">
        <img
          src={`/img/${contacto.avatar}`}
          alt={contacto.name}
          className="chat-header-avatar"
        />
        <span className="chat-header-name">
          {contacto.name} — {contacto.description}
        </span>
      </div>

      <Chat
        messages={mensajes}
        onSend={onEnviarMensaje}
        onDelete={onEliminarMensaje}
      />
    </div>
  );
};

export default ChatScreen;
