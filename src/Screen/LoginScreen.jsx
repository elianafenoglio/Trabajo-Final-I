import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"; // Importa estilos

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === "1234") {
      onLogin(); // Habilita la autenticación en App
      navigate("/contactos"); // Redirige a contactos
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          {/* Logo cargado desde /public */}
          <img src="/logow.png" alt="Logo" className="login-logo" />

          <h2>Acceso al Chat</h2>

          <div className="login-form">
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <button onClick={handleSubmit} className="login-button">
              Ingresar
            </button>
          </div>

          <hr style={{ margin: "1rem 0" }} />
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
