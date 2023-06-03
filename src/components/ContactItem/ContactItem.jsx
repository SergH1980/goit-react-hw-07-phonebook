import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';
import { getFilter } from 'redux/filter/filterSelector';

import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
} from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsSlice';

export default function ContactItem() {
  const unfilteredContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = unfilteredContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return contacts.map(contact => (
    <ContactItemStyled key={contact.id}>
      <ContactItemName>{contact.name}:</ContactItemName>
      <ContactItemNumber>{contact.number}</ContactItemNumber>
      <ContactItemButton
        id={contact.id}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </ContactItemButton>
    </ContactItemStyled>
  ));
}
