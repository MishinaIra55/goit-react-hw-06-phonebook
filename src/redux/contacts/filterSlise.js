import { createSlice } from '@reduxjs/toolkit';


export const filterSlise = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact(state, action) {

    }
  }
})


export const filterContact  = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
