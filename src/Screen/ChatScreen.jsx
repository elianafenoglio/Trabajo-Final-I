import React from "react";
import Chat from "../Chat";
import "../style.css";

const ChatScreen = ({ contacto, mensajes, onEnviarMensaje, onEliminarMensaje }) => {
  const isMobile = window.innerWidth <= 600;

  const volverAContactos = () => {
    document.querySelector(".chat-screen").classList.remove("active");
    document.querySelector(".contact-screen").classList.remove("hidden");
  };

  return (
    <div className="chat-screen active">
      {/* Botón volver para móviles */}
      {isMobile && (
        <button className="back-button" onClick={volverAContactos}>
          ← Volver
        </button>
      )}

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
