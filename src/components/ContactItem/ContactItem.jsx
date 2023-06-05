import React, { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectOperation,
} from 'redux/contacts/contactSelectors';

import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
  EmptyFilterResults,
} from './ContactItem.styled';

export default function ContactItem() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  const reverseContacts = [...contacts].reverse();

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
        onClick={event => {
          dispatch(deleteContact(contact));
        }}
      >
        {operation === 'delete' && !error ? `Loading...` : `Delete`}
      </ContactItemButton>
    </ContactItemStyled>
  ));
}
