import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RoastingInformationButton(props) {

    const navigation = useNavigation();
    const { style } = props
    return (

        <TouchableOpacity
            style={style.Buttons}
            onPress={() => navigation.push("RostingInformation")} >
            <Text style={style.ButtonFont}>로스팅 정보</Text>
        </TouchableOpacity>

    )

}

