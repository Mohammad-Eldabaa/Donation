import React, {useState} from 'react';
import {SafeAreaView, ScrollView,View,Text, Pressable} from 'react-native';
import SignStyle from './SignStyle';
import { verticalScale } from '../../other/scaling';
import Button from '../../other/button/Button';
import { Routes } from '../../navigation/Routes';
import Input from '../login/input';
import { CreateUser } from '../../../api/createUser';

const Sign = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    console.log(email);
    return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    
        

        <View
        // showsVerticalScrollIndicator={false}
        style={SignStyle.container}>

        <Text style={SignStyle.welcomeText}> Welcome To Doni</Text>

        <Input
            keyboardType={'Text'}
            label={'Full Name'}
            placeholder={'Enter your name...'}
            maxChar={25}
            onChangeText={value => setName(value)}
        />
        <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            maxChar={50}
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
        title={"Sign up"}
        colorActive = {true}
        onPress={async ()=>{ 
            let user = await CreateUser(Name,email,password)
            if(user.error){
                setError(user.error)
            }
            else{
            setError('')
            setEmail('')
            setName('')
            setPassword('')
            setSuccess('You have successfully registered');
            setTimeout(()=> navigation.navigate(Routes.Login),3000) 
            }
        }}
        
        />

        <Pressable style={SignStyle.pressabelContainer}>
            <Text style={SignStyle.forgetText}>Already have account?</Text>
        </Pressable>
        </View>


    </SafeAreaView>
    );
};

export default Sign;