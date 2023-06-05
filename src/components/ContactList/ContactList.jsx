import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { useSelector, useDispatch } from 'react-redux';
import { ContactListStyle } from './ContactList.styled';
import { selectError, selectOperation } from 'redux/contacts/contactSelectors';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListStyle>
      {operation === 'fetch' && !error ? (
        <div>Loading. Please wait</div>
      ) : (
        <ContactItem />
      )}
    </ContactListStyle>
  );
}
