import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, postContact, removeContact } from 'api/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const response = await postContact(data);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await removeContact(id);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
