import React, { useState,useEffect } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // For showing a loading screen


// first import 
// npm install expo-app-loading


export const loadInterFonts = async () => {
  await Font.loadAsync({
    'Inter-18pt-Black': require('../../assets/fonts/Inter_18pt-Black.ttf'),
    'Inter-18pt-BoldItalic': require('../../assets/fonts/Inter_18pt-BoldItalic.ttf'),
    'Inter-18pt-ExtraLight': require('../../assets/fonts/Inter_18pt-ExtraLight.ttf'),
    'Inter-18pt-Light': require('../../assets/fonts/Inter_18pt-Light.ttf'),
    'Inter-18pt-MediumItalic': require('../../assets/fonts/Inter_18pt-MediumItalic.ttf'),
    'Inter-18pt-SemiBoldItalic': require('../../assets/fonts/Inter_18pt-SemiBoldItalic.ttf'),
    'Inter-24pt-Black': require('../../assets/fonts/Inter_24pt-Black.ttf'),
    'Inter-24pt-BoldItalic': require('../../assets/fonts/Inter_24pt-BoldItalic.ttf'),
    'Inter-24pt-ExtraLight': require('../../assets/fonts/Inter_24pt-ExtraLight.ttf'),
    'Inter-24pt-Light': require('../../assets/fonts/Inter_24pt-Light.ttf'),
    'Inter-24pt-MediumItalic': require('../../assets/fonts/Inter_24pt-MediumItalic.ttf'),
    'Inter-24pt-SemiBoldItalic': require('../../assets/fonts/Inter_24pt-SemiBoldItalic.ttf'),
    'Inter-28pt-Black': require('../../assets/fonts/Inter_28pt-Black.ttf'),
    'Inter-28pt-BoldItalic': require('../../assets/fonts/Inter_28pt-BoldItalic.ttf'),
    'Inter-28pt-ExtraLight': require('../../assets/fonts/Inter_28pt-ExtraLight.ttf'),
    'Inter-28pt-Light': require('../../assets/fonts/Inter_28pt-Light.ttf'),
    'Inter-18pt-BlackItalic': require('../../assets/fonts/Inter_18pt-BlackItalic.ttf'),
    'Inter-18pt-ExtraBold': require('../../assets/fonts/Inter_18pt-ExtraBold.ttf'),
    'Inter-18pt-ExtraLightItalic': require('../../assets/fonts/Inter_18pt-ExtraLightItalic.ttf'),
    'Inter-18pt-LightItalic': require('../../assets/fonts/Inter_18pt-LightItalic.ttf'),
    'Inter-18pt-Regular': require('../../assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-18pt-Thin': require('../../assets/fonts/Inter_18pt-Thin.ttf'),
    'Inter-24pt-BlackItalic': require('../../assets/fonts/Inter_24pt-BlackItalic.ttf'),
    'Inter-24pt-ExtraBold': require('../../assets/fonts/Inter_24pt-ExtraBold.ttf'),
    'Inter-24pt-ExtraLightItalic': require('../../assets/fonts/Inter_24pt-ExtraLightItalic.ttf'),
    'Inter-18pt-Bold': require('../../assets/fonts/Inter_18pt-Bold.ttf'),
    'Inter-18pt-ExtraBoldItalic': require('../../assets/fonts/Inter_18pt-ExtraBoldItalic.ttf'),
    'Inter-18pt-Italic': require('../../assets/fonts/Inter_18pt-Italic.ttf'),
    'Inter-18pt-Medium': require('../../assets/fonts/Inter_18pt-Medium.ttf'),
    'Inter-18pt-SemiBold': require('../../assets/fonts/Inter_18pt-SemiBold.ttf'),
    'Inter-18pt-ThinItalic': require('../../assets/fonts/Inter_18pt-ThinItalic.ttf'),
    'Inter-24pt-Bold': require('../../assets/fonts/Inter_24pt-Bold.ttf'),
    'Inter-24pt-ExtraBoldItalic': require('../../assets/fonts/Inter_24pt-ExtraBoldItalic.ttf'),
    'Inter-24pt-Italic': require('../../assets/fonts/Inter_24pt-Italic.ttf'),
    'Inter-24pt-Medium': require('../../assets/fonts/Inter_24pt-Medium.ttf'),
    'Inter-24pt-LightItalic': require('../../assets/fonts/Inter_24pt-LightItalic.ttf'),
    'Inter-24pt-Regular': require('../../assets/fonts/Inter_24pt-Regular.ttf'),
    'Inter-24pt-ThinItalic': require('../../assets/fonts/Inter_24pt-ThinItalic.ttf'),
    'Inter-24pt-Thin': require('../../assets/fonts/Inter_24pt-Thin.ttf'),
    'Inter-28pt-BlackItalic': require('../../assets/fonts/Inter_28pt-BlackItalic.ttf'),
    'Inter-28pt-ExtraBold': require('../../assets/fonts/Inter_28pt-ExtraBold.ttf'),
    'Inter-28pt-ExtraLightItalic': require('../../assets/fonts/Inter_28pt-ExtraLightItalic.ttf'),
    'Inter-24pt-SemiBold': require('../../assets/fonts/Inter_24pt-SemiBold.ttf'),
    'Inter-28pt-Bold': require('../../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter-28pt-ExtraBoldItalic': require('../../assets/fonts/Inter_28pt-ExtraBoldItalic.ttf'),
    'Inter-28pt-Italic': require('../../assets/fonts/Inter_28pt-Italic.ttf'),
    'Inter-28pt-Medium': require('../../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-28pt-LightItalic': require('../../assets/fonts/Inter_28pt-LightItalic.ttf'),
    'Inter-28pt-Regular': require('../../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-28pt-SemiBold': require('../../assets/fonts/Inter_28pt-SemiBold.ttf'),
    'Inter-28pt-SemiBoldItalic': require('../../assets/fonts/Inter_28pt-SemiBoldItalic.ttf'),
    'Inter-28pt-Thin': require('../../assets/fonts/Inter_28pt-Thin.ttf'),
    'Inter-28pt-ThinItalic': require('../../assets/fonts/Inter_28pt-ThinItalic.ttf'),
    'Inter-28pt-MediumItalic': require('../../assets/fonts/Inter_28pt-MediumItalic.ttf'),
  });
};
          


const LoadFont = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      loadInterFonts().then(() => setFontsLoaded(true));
    }, []);
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    // Once fonts are loaded, render the rest of your app
    return null;
  };



export default LoadFont;