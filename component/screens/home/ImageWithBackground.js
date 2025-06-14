import React from "react";
import { horizontalScale, scaleFontSize, verticalScale} from "../../other/scaling";
import {View,Text,Image, ImageBackground } from "react-native";

export const ImageWithBackground = ()=>{
    return(
        <View>
            <ImageBackground source={require('../../../assets/HomeBackgroundLogo2.png')} style={{height:verticalScale(180),overflow:'hidden',borderRadius: 20}}>

                <Text style={{fontSize:scaleFontSize(20),fontFamily:'Inter-24pt-SemiBold',color:'white',marginTop:verticalScale(25),marginHorizontal:horizontalScale(20),lineHeight:horizontalScale(28)}}>New Arrival Challenge your lifestyle.</Text>

                <Image style ={{width:horizontalScale(170),height:horizontalScale(150) ,
                    resizeMode:'contain',
                    position:'absolute',
                    bottom:verticalScale(-22),
                    right:horizontalScale(0)
                }} source={require('../../../assets/Box.png') }/>

            </ImageBackground>
        </View>
    )
}