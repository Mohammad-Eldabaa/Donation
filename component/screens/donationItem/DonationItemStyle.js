import { horizontalScale, scaleFontSize, verticalScale } from "../../other/scaling";
import { StyleSheet } from "react-native";


const DonationItemStyle =StyleSheet.create({
    container: {
      marginHorizontal: horizontalScale(20),
      marginTop: verticalScale(7),
    },
    image: {
      marginTop: verticalScale(12),
      marginBottom: verticalScale(24),
      width: '100%',
      height: verticalScale(240),
      borderRadius: horizontalScale(5),
    },
    badge: {
      marginBottom: verticalScale(16),
    },
    description: {
      marginTop: verticalScale(7),
      marginHorizontal: horizontalScale(7),
      fontFamily: 'Inter-18pt-Medium',
      fontSize: scaleFontSize(14),
      marginBottom: verticalScale(10),
    },
    button: {
      marginHorizontal: horizontalScale(20),
    },
  });

  export default DonationItemStyle;