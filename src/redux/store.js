import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { contactsSlice } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { middleware } from './middleware';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whilelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    contacts: contactsSlice.reducer,
  },
  middleware: middleware,
});

export const persistor = persistStore(store);
