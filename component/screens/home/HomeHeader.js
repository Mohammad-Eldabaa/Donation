import React, { useRef, useState } from "react";
import {View,Text,Image,TextInput, Pressable } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale} from "../../other/scaling";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import {useDispatch, useSelector} from 'react-redux';
import { resetToInitialUser } from "../../../redux/reducers/User";
import { userSignOut } from "../../../api/createUser";
import RouteNavigation from "../../navigation/RouteNavigation";
import { Routes } from "../../navigation/Routes";



export const HomeHeader= ({navigation})=>{
    const textInputRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleFocus = () => {
        textInputRef.current.focus();
    };

    const handleSearch = searchValue => {
        setSearch(searchValue);
    }

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    // dispatch(resetToInitial())
    return(
        <View>
            <View style={{height:verticalScale(50),flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={{fontSize:scaleFontSize(16),fontFamily:'Inter-18pt-Regular',color:'#636776',letterSpacing:0.2,lineHeight:scaleFontSize(24)}}>Hello,</Text>
                        <Text style={{fontSize:scaleFontSize(24),fontFamily:'Inter-24pt-SemiBold',color:'#022150'}}>{user.displayName}.👋</Text>
                    </View>
                    
                    <Pressable onPress={async()=>{
                        await userSignOut()
                        dispatch(resetToInitialUser())
                        console.log('user is ' + user)
                    }}>
                        <Image style ={{width:horizontalScale(50),height:horizontalScale(50)}} source={require('../../../assets/HomeLogo.png')}/>
                    </Pressable>
                </View>
                <Pressable  onPress={handleFocus} style={{flexDirection:'row',marginVertical:verticalScale(24),backgroundColor:'#F3F5F9',height:verticalScale(50),borderRadius:horizontalScale(15),alignItems:'center'}}>
                    
                    <FontAwesomeIcon style={{marginStart: horizontalScale(24)}}   size={scaleFontSize(22)}color={'#25C0FF'} icon={faSearch}/>
                    <TextInput
                        ref={textInputRef}
                        placeholder="Search.."
                        value={search}
                        onChangeText={value => handleSearch(value)}
                        style={{padding:horizontalScale(20)}}

                    />
                        
                </Pressable>
        </View>
    )
}