import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { useNavigate } from 'react-router-dom';

const ContactScreen = ({ onSeleccionar }) => {
  const navigate = useNavigate();

  const [contacts] = useState([
    {
      id: "felipe",
      name: "Felipe",
      description: "Amante de la música clásica.",
      avatar: "felipe.jpg",
      last_connection: "10:45",
      connection_status: "online",
    },
    {
      id: "susanita",
      name: "Susanita",
      description: "Fan de la moda y el chisme.",
      avatar: "susanita.jpg",
      last_connection: "ayer",
      connection_status: "offline",
    },
    {
      id: "mafalda",
      name: "Mafalda",
      description: "La política me quita el sueño.",
      avatar: "mafalda.jpg",
      last_connection: "hace 5 min",
      connection_status: "online",
    },
    {
      id: "miguelito",
      name: "Miguelito",
      description: "Filosofando desde el recreo.",
      avatar: "miguelito.jpg",
      last_connection: "ahora",
      connection_status: "online",
    },
    {
      id: "manolo",
      name: "Manolo",
      description: "Si alguien golpea tu mejilla izquierda, ve y aprende Karate.",
      avatar: "manolo.jpg",
      last_connection: "ahora",
      connection_status: "online",
    },
    {
      id: "guille",
      name: "Guille",
      description: "He decidido enfrentar la realidad, así que apenas se ponga linda me avisan.",
      avatar: "Guille.jpg",
      last_connection: "ahora",
      connection_status: "offline",
    },
    {
      id: "mama",
      name: "Mama",
      description: "La vida irá hacia adelante, cuando te apartes de las personas que te llevan hacia atrás.",
      avatar: "madremafalda.png",
      last_connection: "ahora",
      connection_status: "offline",
    },
    {
      id: "papa",
      name: "Papa",
      description: "Y... no será que en este mundo hay cada vez más gente y menos personas?.",
      avatar: "padremafalda.png",
      last_connection: "ahora",
      connection_status: "online",
    }
  ]);

  const handleSeleccion = (contacto) => {
    onSeleccionar(contacto, navigate);
  };

  return (
    <div className="contact-screen" style={{ width: "400px", minWidth: "350px", paddingTop: "0" }}>
      <ContactList contacts={contacts} onSeleccionar={handleSeleccion} />
    </div>
  );
};

export default ContactScreen;
