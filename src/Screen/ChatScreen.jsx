
// ChatScreen.jsx
import React from "react";
import Chat from "../Chat";
import "../style.css";

const ChatScreen = ({ contacto, mensajes, onEnviarMensaje, onEliminarMensaje }) => {
  return (
    <div className="chat-screen">
      <h2>Conversación con {contacto.name || contacto.nombre}</h2>
      <Chat
        messages={mensajes}
        onSend={onEnviarMensaje}
        onDelete={onEliminarMensaje}
      />
    </div>
  );
};

export default ChatScreen;
