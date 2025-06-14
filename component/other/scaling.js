import { Dimensions } from 'react-native';
import * as Device from 'expo-device';

// Get the device's screen dimensions
const { width, height } = Dimensions.get('window');

// Check if the device is small (e.g., iPhone 5, SE, etc.)
const isSmall = width <= 375 && !Device.modelName.includes('iPhone X');

// Define the guideline base width based on whether the device is small or not
const guidelineBaseWidth = isSmall ? 330 : 350;

// Define the guideline base height based on the device's width
const guidelineBaseHeight = isSmall
  ? 550
  : width > 410
  ? 620
  : 680;

// Define the guideline base font size based on the device's width
const guidelineBaseFonts = width > 410 ? 430 : 400;

// Function to scale a size horizontally based on the device's width
const horizontalScale = size => (width / guidelineBaseWidth) * size;

// Function to scale a size vertically based on the device's height
const verticalScale = size => (height / guidelineBaseHeight) * size;

// Function to scale a font size based on the device's width
const scaleFontSize = size => Math.round((size * width) / guidelineBaseFonts);

// Export the scaling functions for use in other modules
export { horizontalScale, verticalScale, scaleFontSize };
