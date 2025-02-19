import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR13Rn1POLLrauVJ3bBOCe9atM_Gw5FWo",
  authDomain: "doni-ed109.firebaseapp.com",
  projectId: "doni-ed109",
  storageBucket: "doni-ed109.firebasestorage.app",
  messagingSenderId: "350064684894",
  appId: "1:350064684894:android:ffb6d4a3dbd6df454fa9cf",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth with persistence using AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export Storage instance
export const storage = getStorage(app);

export default app;
