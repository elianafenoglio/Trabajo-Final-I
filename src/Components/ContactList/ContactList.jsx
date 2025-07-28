import React, { useState } from 'react';
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, onSeleccionar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Muestra todos los contactos si no se ingresó texto
  const filteredContacts = searchTerm.trim()
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;

  return (
    <div className="contact-list">
      <h2 className="contact-title">Contactos</h2>

      {/* Formulario de búsqueda */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar contacto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lista de contactos filtrada (o completa si no hay búsqueda) */}
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onClick={() => onSeleccionar(contact)}
        />
      ))}
    </div>
  );
};

export default ContactList;
