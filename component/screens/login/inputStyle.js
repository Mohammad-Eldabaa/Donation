import {StyleSheet} from 'react-native';
import { scaleFontSize, verticalScale } from '../../other/scaling';

const inputStyle = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#36455A',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default inputStyle;
