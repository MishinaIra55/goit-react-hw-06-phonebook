import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

export const contactsSlice = createSlice({
  name:'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(state)
        state.contacts.push(action.payload);

      },
      // prepare(text) {
      //   return {
      //     payload: {
      //       text,
      //       id: nanoid(),
      //     },
      //   },
      // },
    },
    deleteContact (state,action) {
      return state.filter(contact => contact.id !== action.payload)},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
