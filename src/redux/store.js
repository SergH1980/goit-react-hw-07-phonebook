import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
