import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListStyle } from './ContactList.styled';
import { selectIsLoading } from 'redux/contacts/contactSelectors';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactListStyle>
      {isLoading && <div>Loading. Please wait</div>}
      <ContactItem />
    </ContactListStyle>
  );
}
