import React, { useDebugValue } from "react";
import {View,Text, ScrollView } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale} from "../../other/scaling";
import LoadFont from "../../fonts/loadFonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./HomeHeader";
import { ImageWithBackground } from "./ImageWithBackground";
import { Taps } from "./Taps";
import { ItemSet } from "./itemset/ItemSet";
import { useDispatch, useSelector } from "react-redux";

const Home= ({navigation})=>{

    return (
        <SafeAreaView  style={{backgroundColor:'white',flex:1}}>

        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: horizontalScale(24),marginTop:verticalScale(12),}}>
            <LoadFont/>
            <HomeHeader/>
            <ImageWithBackground/>   
            <Text style={{fontSize:scaleFontSize(18),fontFamily:'Inter-24pt-SemiBold',color:'#022150',marginTop:horizontalScale(24),lineHeight:scaleFontSize(19)}}>Select Category</Text>
            <Taps/>
            <ItemSet navigation={navigation}/>
        </ScrollView>
    </SafeAreaView>
    ); 
};

export default Home;