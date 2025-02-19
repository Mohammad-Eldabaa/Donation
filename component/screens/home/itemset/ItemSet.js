import React, { useEffect, useState } from "react";
import { Dimensions, Image, View,Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { horizontalScale, scaleFontSize } from "../../../other/scaling";
import { styles } from "./ItemSetStyle";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "../../../navigation/Routes";
import { changeSelectedDonationId, changeSelectedDonationInfo } from "../../../../redux/reducers/Donation";
import { resetToInitial } from "../../../../redux/reducers/User";

export const ItemSet = ({navigation}) => {

    const donation = useSelector(state=>state.donation)
    const dispatch = useDispatch()
    const donationItem = donation.donationItem;
    const [flteredItem,setFlteredItem] = useState([])
    // dispatch(resetToInitial())

    useEffect(()=>{
        setFlteredItem(donationItem.filter(value=> value.categoryIds.includes(donation.selectedDonationId)))
        // console.log('nubmer is ' + donation.selectedDonationId) 
    },[ donation.selectedDonationId])

    useEffect(()=>{
        // console.log("is   " + donation.selectedDonationInfo.donationItemId)

        dispatch(changeSelectedDonationId(1))
    },[])
    

    return (
        <View style={styles.container}>
            {
                flteredItem.map((value, index) => (
                    <Item 
                        key={index} 
                        name={value.name} 
                        price={value.price} 
                        link={value.image} 
                        navi = {()=> navigation.navigate(Routes.DonationItem)}
                        dispatchAction = {()=> dispatch(changeSelectedDonationInfo(value.donationItemId))} 
                        />
                ))

            }
            
        </View>
    );
};

const Item = ({name,price,link,navi,dispatchAction}) => {
    // console.log(link)
    return (
        <Pressable 
        style={styles.item}
            onPress={()=>{
                dispatchAction()
                navi()
            }}>
            <View >
                <View style={{position:"absolute",zIndex:1,marginLeft:15}}>
                <Text style={{color:'white'}}>good</Text>
                </View>
                <Image 
                    style={styles.image} 
                    resizeMode="stretch"
                    // source={require('../../../../assets/itemBackground.png')} 
                    source = {{uri:link}}
                    
                />
                <Text style={{marginStart:5,fontSize:scaleFontSize(18),fontFamily:'Inter-24pt-SemiBold',color:'#0A043C',marginTop:horizontalScale(12),lineHeight:scaleFontSize(19)}}>{name}</Text>
                <Text style={{marginStart:5,fontSize:scaleFontSize(18),fontFamily:'Inter-24pt-SemiBold',color:'#156CF7',marginTop:horizontalScale(12),lineHeight:scaleFontSize(19)}}>${price}</Text>

            </View>
        </Pressable>
    );
};



export default ItemSet;
