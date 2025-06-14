import React from "react";
import {Text,View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from "./Routes.js";
import Home from "../screens/home/Home.js";
import DonationItem from "../screens/donationItem/DonationItem.js";
import Login from "../screens/login/Login.js";
import Sign from "../screens/signUp/Sign.js";
import { useDispatch, useSelector } from "react-redux";
import { resetToInitialUser } from "../../redux/reducers/User.js";



const Stack = createStackNavigator();

export const MainNavigation = ()=>{


    console.log('return is ok')


    return(
        
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Routes.Login} >
                <Stack.Screen name={Routes.Login} component={Login} />
                <Stack.Screen name={Routes.SingUp} component={Sign} />
                {/* <Stack.Screen name={Routes.Home} component={Home} /> */}
            </Stack.Navigator>
    )
}

export const AuthMainNavigation = ()=>{

    const dispatch = useDispatch()
    console.log('switch is done.')
    return(
        
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Routes.Home} >
                <Stack.Screen name={Routes.Home} component={Home} />
                <Stack.Screen name={Routes.DonationItem} component={DonationItem} />
                {/* <Stack.Screen name={Routes.Login} component={Login} /> */}

            </Stack.Navigator>
    )
}