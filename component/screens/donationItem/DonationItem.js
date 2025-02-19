import React from 'react';
import {SafeAreaView, ScrollView,Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from './BackButton';
import DonationItemStyle from './DonationItemStyle';
import { horizontalScale, verticalScale } from '../../other/scaling';
import Button from '../../other/button/Button';

const DonationItem = ({navigation}) => {

  const donation = useSelector(state => state.donation);
  const donationInfromation = donation.selectedDonationInfo
  console.log(donationInfromation);

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white',marginTop:verticalScale(32)}}>
      <ScrollView showsVerticalScrollIndicator={false} style={DonationItemStyle.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationInfromation.image}}
          style={DonationItemStyle.image}
          resizeMode='stretch'
        />
        <Text style={DonationItemStyle.description}>
          {donationInfromation.description}
          {donationInfromation.description}
          {donationInfromation.description}
          {donationInfromation.description}
          {donationInfromation.description}
          {donationInfromation.description}
          {donationInfromation.description}
        </Text>
        
      </ScrollView>
      <View style={{padding:horizontalScale(12)}}>
        <Button colorActive = {true} title={'Done'}/>
      </View>
    </SafeAreaView>
  );
};

export default DonationItem;
