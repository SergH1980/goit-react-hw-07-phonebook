import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialeState = {
  items: [],
  isLoading: false,
  error: null,
};

// const toastSettings = {
//   position: 'top-center',
//   autoClose: 2000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: 'light',
// };

// function notify(data) {
//   toast.warn(`${data} is already in contacts`, toastSettings);
// }

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);

  // state.items.some(
  //   contact =>
  //     contact.name.toLowerCase().trim() ===
  //     action.payload.name.toLowerCase().trim()
  // )
  //   ? notify(action.payload.name)
  //   : state.items.push(action.payload);
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialeState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
