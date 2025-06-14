import React from 'react';

import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import BackButtonStyle from './BackButtonStyle';
import { scaleFontSize, verticalScale } from '../../other/scaling';

const BackButton =( {onPress} )=> {
    return (
        <Pressable onPress={() => onPress()} style={BackButtonStyle.container}>
            <FontAwesomeIcon size={scaleFontSize(22)} icon={faArrowLeft} />
        </Pressable>
    );
};

export default BackButton;