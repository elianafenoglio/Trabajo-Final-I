// ContactItem.jsx
import React from 'react';

const ContactItem = ({ contact, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        marginBottom: '1rem',
        padding: '1rem',
        cursor: 'pointer',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <img src={contact.avatar} alt={contact.name} width="50" />
      <h2>{contact.name}</h2>
      <p><strong>Descripción:</strong> {contact.description}</p>
      <p><strong>Última conexión:</strong> {contact.last_connection}</p>
      <p><strong>Estado:</strong> {contact.connection_status}</p>
    </div>
  );
};

export default ContactItem;
