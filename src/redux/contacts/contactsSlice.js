import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

export const contactsSlice = createSlice({
  name:'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact (state, action) {state.push(action.payload)},
    deleteContact (state,action) {state.filter(contact => contact.id !== action.payload)},
    filterContact(state,action) {}
  }
})

export const {addContact, deleteContact, filterContact} = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
