import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/operations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  ErrorMessage,
} from './Form.styled';
import { fetchingContactsSuccess } from 'redux/contacts/contactsSlice';

const SignupSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  phone: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(getContactList);

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={SignupSchem}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values.name, values.phone));

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
        <FormLabel htmlFor="phone">Number</FormLabel>
        <Field
          type="tel"
          name="phone"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="phone" component="div" />
        <SubmitButton name="submit" type="submit">
          Add contact
        </SubmitButton>
      </Form>
    </Formik>
  );
}
