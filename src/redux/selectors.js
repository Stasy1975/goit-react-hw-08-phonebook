export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const getState = ({ contacts }) => ({
  loading: contacts.isLoading,
  error: contacts.error,
});

export const selectUserData = ({ user }) => user.body;

export const selectModalContact = ({ modal }) => modal.editContact;

export const selectModalOpen = ({ modal }) => modal.isOpen;

export const selectIsLoggedIn = ({ user }) => user.isLoggedIn;
