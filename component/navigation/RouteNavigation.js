import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AuthMainNavigation, MainNavigation } from "./MainNavigation";
import { DevSettings } from "react-native";

const RouteNavigation = ()=>{
    const user = useSelector(state=> state.user)
    
    return user.isLogin? <AuthMainNavigation/> : <MainNavigation/>
}

export default RouteNavigation;