import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecipesButton(props) {

    const navigation = useNavigation();
    const { style } = props
    return (

        <TouchableOpacity style={style.Buttons} onPress={() => navigation.push("Recipes")} >
            <Text style={style.ButtonFont}>레시피</Text>
        </TouchableOpacity>
    )

}