import React, { useEffect, useRef, useState } from 'react';
import {Pressable, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';
import { horizontalScale, verticalScale } from '../scaling';
import { useSelector } from 'react-redux';
const Button = ({ 
    title,
    tabId, 
    colorActive = false,
    onPress = () => {},}) => {

    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;

    const selectedCategoryId = useSelector(state => state.category.selectedCategoryId);
    const [isActive, setIsActive]= useState(tabId === selectedCategoryId)



    useEffect(() => {
      if(tabId === selectedCategoryId){
        setIsActive(true);
      }
      else{
        setIsActive(false);
      }
    }, [selectedCategoryId]);

    
  return (
    <Pressable
      style={[ButtonStyle.button, !isActive && ButtonStyle.disabled,{width: 'auto'} , colorActive&&{backgroundColor:'#2979F2'}]}
      onPress={()=>{
        if(selectedCategoryId != tabId) onPress()
        }}>

      <Text 
        onTextLayout={event => {
          // if (event.nativeEvent.lines && event.nativeEvent.lines.length > 0) {
          //   const wed = event.nativeEvent.lines[0].width
          //   setWidth((paddingHorizontal * 1 )+ wed);
          // }
        }}
        ref={textRef} 
        style={[ButtonStyle.title, !isActive && ButtonStyle.titleDisactive, colorActive&&{color:'white'}]}
        >        {title}        </Text>
    </Pressable>
  );
};


Button.propTypes = {
  title: PropTypes.string.isRequired,
  tabId: PropTypes.number,
  active:  PropTypes.bool,
  
  // isActive: PropTypes.bool,
  onPress: PropTypes.func,
  // height: PropTypes.number,
  width: PropTypes.number,
};

export default Button;