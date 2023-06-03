import { combineReducers } from 'redux';

import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
