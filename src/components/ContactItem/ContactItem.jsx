import React, { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContactList } from 'redux/contacts/contactSelectors';
import { getFilter } from 'redux/filter/filterSelector';

import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
  EmptyFilterResults,
} from './ContactItem.styled';

export default function ContactItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const unfilteredContacts = useSelector(getContactList);

  const filter = useSelector(getFilter);

  const contacts = unfilteredContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const reverseContacts = [...contacts].reverse();
  // console.log(reverseContacts);

  if (reverseContacts.length < 1) {
    return (
      <EmptyFilterResults>
        No contacts in your phonebook <br />
        or
        <br /> No contacts match your query
      </EmptyFilterResults>
    );
  }

  return reverseContacts.map(contact => (
    <ContactItemStyled key={contact.id}>
      <ContactItemName>{contact.name}:</ContactItemName>
      <ContactItemNumber>{contact.phone}</ContactItemNumber>
      <ContactItemButton
        id={contact.id}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </ContactItemButton>
    </ContactItemStyled>
  ));
}
