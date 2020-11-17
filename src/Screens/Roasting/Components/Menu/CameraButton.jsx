import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native'

export default function CameraButton(props) {
    const navigation = useNavigation();
    const { style } = props;
    return (
        <TouchableOpacity style={style.Button} onPress={() => { navigation.push("Camera") }}>
            <Image
                style={style.icon}
                source={require("../../../../../assets/images/camera_icon.png")}
                resizeMode="contain" />
            <Text style={style.text}>사진으로 찍어서 확인</Text>
        </TouchableOpacity>
    );



}
