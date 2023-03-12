import { createSlice } from '@reduxjs/toolkit';



const modalContact = createSlice({
    name: "modal",
    initialState: {
        editContact: null,
        isOpen: false
    },
    reducers: {
        editContact: (state, { payload }) => {
            state.editContact = payload;
        },
    }
})

export const { editContact } = modalContact.actions;

export const modalReducer = modalContact.reducer;