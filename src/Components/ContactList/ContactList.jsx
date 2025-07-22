// ContactList.jsx
import React from 'react';
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, onSeleccionar }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
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
