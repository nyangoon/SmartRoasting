
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native'

export default function AlbumButton(props) {
    const navigation = useNavigation();
    const { style } = props;
    return (
        <TouchableOpacity style={style.Button} onPress={() => { navigation.push("Album") }}>
            <Image
                style={style.icon}
                source={require("../../../../../assets/images/album_icon.png")}
                resizeMode="contain" />
            <Text style={style.text}>앨범에서 골라서 확인</Text>
        </TouchableOpacity>
    );



}
