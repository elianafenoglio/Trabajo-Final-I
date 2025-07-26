// ContactItem.jsx
import React from 'react';

const ContactItem = ({ contact, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        marginBottom: '0.5rem',
        padding: '0.6rem',
        cursor: 'pointer',
        borderRadius: '8px',
        backgroundColor: '#2a2a2a',
        color: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
      }}
    >
      <img
        src={`/img/${contact.avatar}`}
        alt={contact.name}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '1rem' }}>
          {contact.name} — {contact.description}
        </span>
        <small style={{ color: '#bbb', fontSize: '0.75rem' }}>
          {contact.last_connection} - {contact.connection_status}
        </small>
      </div>
    </div>
  );
};

export default ContactItem;

