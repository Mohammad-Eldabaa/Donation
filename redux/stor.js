import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer, persistStore} from 'redux-persist';

import {combineReducers, configureStore} from '@reduxjs/toolkit';

import User from './reducers/User';
import Category from './reducers/Category';
import Donation from './reducers/Donation';

const rootReducer = combineReducers({
  user: User,
  category: Category,
  donation: Donation,
});



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  debug: true, // Enable debugging

};


const persist_Reducer = persistReducer(persistConfig,rootReducer)
 
const store = configureStore({
    reducer: persist_Reducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
          serializableCheck: false,
      });
  }
  
})





export default store;
export const persistor = persistStore(store);

// used to refreach the external storage.
// persistor.purge();