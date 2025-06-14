import {StyleSheet} from 'react-native';
import { horizontalScale } from '../../other/scaling';


const BackButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackButtonStyle;