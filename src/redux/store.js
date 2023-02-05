import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlise';


import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'phonebook',
  storage,
}

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter:filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)




export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
