import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RoastingButton(props) {

    const navigation = useNavigation();
    const { style } = props
    return (

        <TouchableOpacity style={style.RoastingButton} onPress={() => navigation.push("Roasting")}>
            <Text style={style.ButtonFont}>
                로스팅 확인
            </Text>

        </TouchableOpacity>

    )

}