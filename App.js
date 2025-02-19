import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './component/navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

import {Provider, useDispatch} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import store, { persistor } from './redux/stor';
import LoadFont from './component/fonts/loadFonts';
import RouteNavigation from './component/navigation/RouteNavigation';
import { useEffect, useRef } from 'react';
import { checkToken } from './api/createUser';



export default function App() {




  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );
    checkToken();
    console.log('Application has rendered');
  }, []);



  
  return (
    
    
    <Provider store={store}>
      <PersistGate persistor ={persistor} loading ={null}>
        <NavigationContainer>
            <LoadFont/>
            <RouteNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

