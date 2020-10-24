import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeBeansButton(props) {

    const navigation = useNavigation();
    const { style } = props
    return (

        <TouchableOpacity style={style.Buttons} onPress={() => navigation.push("CoffeeBeans")}>
            <Text style={style.ButtonFont}>원두 정보</Text>
        </TouchableOpacity>

    )

}