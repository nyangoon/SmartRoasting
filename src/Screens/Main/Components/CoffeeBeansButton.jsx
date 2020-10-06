import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeBeansButton() {

    const navigation = useNavigation();
    return (

        <Button title="원두" onPress={() => navigation.push("CoffeeBeans")} />

    )

}