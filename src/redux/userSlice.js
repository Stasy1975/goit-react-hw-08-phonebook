import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from 'redux/operations';

const userAccount = createSlice({
  name: 'user',
  initialState: {
    body: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },

  extraReducers: {
    [register.fulfilled](state, action) {
      state.body = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.body = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state) {
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.body = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isLoggedIn = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.body = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state) {
      state.isLoggedIn = false;
    },
  },
});

export const userReduser = userAccount.reducer;
