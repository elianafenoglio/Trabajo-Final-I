
import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { useNavigate } from 'react-router-dom';

const ContactScreen = ({ onSeleccionar }) => {
  const navigate = useNavigate();

  const [contacts] = useState([
    {
      id: "c1",
      name: "Pedro",
      description: "Solo vives una vez, pero no te olvides de mí",
      avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      last_connection: "15:23",
      connection_status: "offline",
    },
    {
      id: "c2",
      name: "Juan",
      description: "Ríe, ama y sueña",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      last_connection: "ahora",
      connection_status: "online",
    },
  ]);

  const handleSeleccion = (contacto) => {
    onSeleccionar(contacto, navigate);
  };

  return (
    <div className="contact-screen">
      <h1>Lista de Contactos</h1>
      <ContactList contacts={contacts} onSeleccionar={handleSeleccion} />
    </div>
  );
};

export default ContactScreen;
