import axios from 'axios';
import {
  fetchingContactsInProgress,
  fetchingContactsSuccess,
  fetchingContactsError,
  addContactInProgress,
  addContactSuccess,
  addContactError,
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,
} from './contacts/contactsSlice';

axios.defaults.baseURL = 'https://647b700fd2e5b6101db14df1.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingContactsInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchingContactsError(error.message));
  }
};

export const addContact = (name, phone) => async dispatch => {
  try {
    dispatch(addContactInProgress());
    const response = await axios.post('/contacts', { name, phone });
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch(deleteContactInProgress());
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(response.data));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
