import React from 'react';
import { ContactListStyle } from './ContactList.styled';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  return (
    <ContactListStyle>
      <ContactItem />
    </ContactListStyle>
  );
}
