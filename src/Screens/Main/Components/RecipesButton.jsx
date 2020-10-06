import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecipesButton() {

    const navigation = useNavigation();
    return (

        <Button title="레시피" onPress={() => navigation.push("Recipes")} />

    )

}