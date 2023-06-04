import React from 'react';
import { ContactListStyle, EmptyList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ContactListStyle>
      <ContactItem />
    </ContactListStyle>
  );
}
