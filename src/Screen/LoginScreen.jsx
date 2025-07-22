
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logow.png";
import "../style.css";

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

  const irAContactos = () => {
    navigate("/contactos");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2>Acceso al Chat</h2>
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
          <hr style={{ margin: "1rem 0" }} />
          
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
