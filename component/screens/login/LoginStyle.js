import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../other/scaling';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:verticalScale(32),
    marginHorizontal: horizontalScale(24),
    justifyContent:'center'
  },
  welcomeText:{
    fontFamily: 'Inter-28pt-SemiBold',
    fontSize: scaleFontSize(32),
    color: "#2979F2",
    marginBottom: verticalScale(24)
  },
  welcomeContainer:{
    position: 'absolute',
    top:verticalScale(96),
    left: 0, 
    right: 0,
    alignItems: 'center',
  },
  pressabelContainer:{alignItems:'center',marginTop:verticalScale(24)},
  forgetText:{color:'#156CF7'}
});

export default LoginStyle;