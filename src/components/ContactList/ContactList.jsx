import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListStyle } from './ContactList.styled';
import { selectError, selectOperation } from 'redux/contacts/contactSelectors';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);

  return (
    <ContactListStyle>
      {/* {operation === 'fetch' && !error ? (
        <div>Loading. Please wait</div>
      ) : (
        <ContactItem />
      )} */}
      <ContactItem />
    </ContactListStyle>
  );
}
