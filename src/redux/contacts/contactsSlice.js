import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contactsInitialeState = {
  items: [],
  isLoading: false,
  error: null,
};

const toastSettings = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

function notify(data) {
  toast.warn(`${data} is already in contacts`, toastSettings);
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialeState,
  reducers: {
    fetchingContactsInProgress(state) {
      state.isLoading = true;
    },
    fetchingContactsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingContactsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContactInProgress(state) {
      state.isLoading = true;
    },
    addContactSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          action.payload.name.toLowerCase().trim()
      )
        ? notify(action.payload.name)
        : state.items.push(action.payload);
    },
    addContactError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteContactInProgress(state) {
      state.isLoading = true;
    },
    deleteContactSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    deleteContactError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingContactsInProgress,
  fetchingContactsSuccess,
  fetchingContactsError,
  addContactInProgress,
  addContactSuccess,
  addContactError,
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
