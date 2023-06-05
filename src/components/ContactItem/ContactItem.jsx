import React from 'react';
import { deleteContact } from 'redux/operations';
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
        isLoading=""
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact));
        }}
      >
        {operation === contact.id && !error ? `Loading...` : `Delete`}
      </ContactItemButton>
    </ContactItemStyled>
  ));
}
