import React from 'react';
// import { useSelector } from 'react-redux';
import { ContactListStyle } from './ContactList.styled';
// import { selectIsLoading, selectError } from 'redux/contacts/contactSelectors';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <ContactListStyle>
      {/* {isLoading && !error && <div>Loading. Please wait</div>} */}
      <ContactItem />
    </ContactListStyle>
  );
}
