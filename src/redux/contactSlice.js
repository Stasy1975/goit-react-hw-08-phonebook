import { createSlice } from '@reduxjs/toolkit';

import {
  getAllContacts,
  addContact,
  removeContact,
  patchContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [removeContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },

    [removeContact.fulfilled]: (state, action) => {
      const newContacts = state.items.filter(
        item => item.id !== action.payload
      );

      return {
        isLoading: false,
        error: null,
        items: newContacts,
      };
    },

    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [patchContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
