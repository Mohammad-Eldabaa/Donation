import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import inputStyle from './inputStyle';
import { verticalScale } from '../../other/scaling';


const Input = ({
    keyboardType= 'default',
    secureTextEntry= false,
    maxChar =  40 ,
    onChangeText = () => {},
    placeholder,
    label,
    }) => {
    
    const [value, setValue] = useState('');
    return (
        <View style={{marginTop:verticalScale(32)}}>

       <Text style={inputStyle.label}>{label}</Text>

        <TextInput
            placeholder={placeholder ? placeholder : null}
            style={inputStyle.input}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onChangeText={val => {
            if(val.length < maxChar)
                setValue(val);
                onChangeText(val);
            }}
        />
        </View>
    );
};



Input.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  maxChar: PropTypes.number
};

export default Input;