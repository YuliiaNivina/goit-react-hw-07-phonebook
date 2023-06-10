import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      state.contactsList.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
    filtredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contactsList'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, filtredContacts } =
  contactSlice.actions;
