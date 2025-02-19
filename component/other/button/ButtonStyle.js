import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../scaling';


const ButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(45),
    marginEnd:horizontalScale(10),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
    
  },
  disabled: {
    opacity: 1,
    backgroundColor:'#F3F5F9'
  },
  title: {
    fontFamily: 'Inter-24pt-SemiBold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    padding: horizontalScale(10),
    textAlign: 'center',
    
  },
  titleDisactive:{
    color: 'gray',
  }
});

export default ButtonStyle;