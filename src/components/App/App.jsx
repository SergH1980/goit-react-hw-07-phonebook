import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyle } from './App.styled';

import ContactForm from '../ContactForm/Form';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import ContactFilter from '../ContactFilter/ContactFilter';

export default function App() {
  return (
    <AppStyle>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
