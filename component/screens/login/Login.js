import React, {useState} from 'react';
import {SafeAreaView, ScrollView,View,Text, Pressable} from 'react-native';
import LoginStyle from './LoginStyle';
import Input from './input';
import { verticalScale } from '../../other/scaling';
import Button from '../../other/button/Button';
import { Routes } from '../../navigation/Routes';
import { LoginUser } from '../../../api/createUser';
import SignStyle from '../signUp/SignStyle';
import { useDispatch } from 'react-redux';
import { LogIn, resetToInitialUser } from '../../../redux/reducers/User';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()
    useDispatch(resetToInitialUser)

    // console.log(email);
    return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        

        <View
        // showsVerticalScrollIndicator={false}
        style={LoginStyle.container}> 

        <Text style={LoginStyle.welcomeText}> Welcome To Doni</Text>


        <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
        />
        <Input
            keyboardType={'password'}
            label={'Password'}
            secureTextEntry = {true}
            placeholder={'Enter your password...'}
            onChangeText={value => setPassword(value)}
        />

        <View style={{marginTop: verticalScale(32)}}/>

        {error.length > 0 && <Text style={SignStyle.error}>{error}</Text>}
        {success.length > 0 && <Text style={SignStyle.success}>{success}</Text>}



        <View style={{marginTop: verticalScale(32)}}/>

        <Button 
        title={"Login"}
        colorActive = {true}
        onPress={
            async()=> {
                console.log('email is : ' + email)
                console.log('password is : ' + password)

                let response = await LoginUser(email,password)

                if(response.state){
                    setError('')
                    setSuccess("Login succesfuly")
                    setTimeout(()=> navigation.navigate(Routes.Home), 3000) 
                    dispatch(LogIn(response.date))
                    setEmail('')
                    setPassword('')
                }else{                    
                    console.log("the Error: " + response.error)
                    setError(response.error)
                }

            }
        }
        />

        <Pressable 
            style={LoginStyle.pressabelContainer}
            onPress={()=> navigation.navigate(Routes.SingUp) }
        >
            <Text style={LoginStyle.forgetText}>Don't have an account?</Text>
        </Pressable>
        </View>

    </SafeAreaView>
    );
};

export default Login;