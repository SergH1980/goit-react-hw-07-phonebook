import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  ErrorMessage,
} from './Form.styled';
import { addContact } from 'redux/contacts/contactsSlice';

const SignupSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchem}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        const toCompareName = contact => {
          return contact.name === values.name;
        };
        if (!contactList.some(toCompareName)) {
          return resetForm();
        }
      }}
    >
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
        <FormLabel htmlFor="number">Number</FormLabel>
        <Field
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <SubmitButton name="submit" type="submit">
          Add contact
        </SubmitButton>
      </Form>
    </Formik>
  );
}
