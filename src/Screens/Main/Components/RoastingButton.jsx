import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RoastingButton() {

    const navigation = useNavigation();
    return (

        <Button title="로스팅" onPress={() => navigation.push("Roasting")} />

    )

}