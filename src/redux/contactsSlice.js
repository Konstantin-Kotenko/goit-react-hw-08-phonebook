import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from 'api/contacts';
import { Notify } from 'notiflix';

const initialState = {
  contacts: [],
  filter: '',
};

export const getContacts = state => state.contacts.contacts;
export const getFilterValue = state => state.contacts.filter;

export const getAllContacts = createAsyncThunk(
  'constacts/getAllContacts',
  async () => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      await fetchAddContact(contact);
      Notify.success('Added');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await fetchDeleteContact(id);
      Notify.success('Deleted');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContac',
  async contact => {
    try {
      await fetchEditContact(contact);
      Notify.success('Edited');
      const data = fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getAllContacts.fulfilled](state, action) {
      state.contacts = [...action.payload];
    },
    [addNewContact.fulfilled](state, action) {
      state.contacts = [...action.payload];
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = [...action.payload];
    },
    [editContact.fulfilled](state, action) {
      state.contacts = [...action.payload];
    },
  },
  reducers: {
    filterContacts: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
