import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState as contacts } from './contacts.init-state';


export const filterSlise = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return state = action.payload;
    },
  },
});


export const { filterContact } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
