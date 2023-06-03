import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contactsInitialeState = [];

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
    addContact: {
      reducer(state, action) {
        state.some(
          contact =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        )
          ? notify(action.payload.name)
          : state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name: name,
            number: number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
