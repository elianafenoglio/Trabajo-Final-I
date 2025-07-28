
import React, { useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      {/* Ícono de adjuntar */}
      <span className="icon" title="Adjuntar archivo">📎</span>

      {/* Campo de texto */}
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      {/* Botón enviar */}
      <button onClick={handleSend}>Enviar</button>

      {/* Ícono de micrófono */}
      <span className="icon" title="Mensaje de voz">🎤</span>
    </div>
  );
}

export default MessageInput;
