
// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./Screen/LoginScreen";
import ContactScreen from "./Screen/ContactScreen/ContactScreen";
import ChatScreen from "./Screen/ChatScreen";
import "./style.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contactoActivo, setContactoActivo] = useState(null);
  const [mensajesPorContacto, setMensajesPorContacto] = useState({});

  const handleLogin = () => setIsAuthenticated(true);

  const handleSeleccionarContacto = (contacto) => {
    setContactoActivo(contacto);
    // En móviles: ocultar contactos y mostrar chat
    if (window.innerWidth <= 600) {
      document.querySelector(".contact-screen").classList.add("hidden");
      document.querySelector(".chat-screen").classList.add("active");
    }
  };

  
  const handleEnviarMensaje = (mensajeTexto) => {
    if (!contactoActivo) return;

    const contactoId = contactoActivo.id;
    const nuevoId = Date.now();
    const mensajeUsuario = { id: nuevoId, text: mensajeTexto, sender: "yo" };
    const mensajeAuto = {
      id: nuevoId + 1,
      text: "Gracias por tu mensaje. En breve te respondo.",
      sender: "auto",
    };

    setMensajesPorContacto((prev) => {
      const mensajesAnteriores = prev[contactoId] || [];
      return {
        ...prev,
        [contactoId]: [...mensajesAnteriores, mensajeUsuario, mensajeAuto],
      };
    });
  };

  const handleEliminarMensaje = (id) => {
    if (!contactoActivo) return;
    const contactoId = contactoActivo.id;
    setMensajesPorContacto((prev) => {
      const mensajesFiltrados = prev[contactoId].filter((msg) => msg.id !== id);
      return {
        ...prev,
        [contactoId]: mensajesFiltrados,
      };
    });
  
  
  };




  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
        <Route
          path="/contactos"
          element={
            isAuthenticated ? (
              <div className="main-layout">
                <ContactScreen onSeleccionar={handleSeleccionarContacto} />
                {contactoActivo ? (
                  <ChatScreen
                    contacto={contactoActivo}
                    mensajes={mensajesPorContacto[contactoActivo.id] || []}
                    onEnviarMensaje={handleEnviarMensaje}
                    onEliminarMensaje={handleEliminarMensaje}
                  />
                ) : (
                  <div className="chat-screen">
                    <p style={{ margin: "auto", fontStyle: "italic" }}>
                      Selecciona un contacto para iniciar una conversación.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
