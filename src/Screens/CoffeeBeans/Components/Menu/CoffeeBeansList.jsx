import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CoffeeInfo from './CoffeeInfo';
export default function CoffeeBeanList() {

    return (
        <ScrollView style={style.list}>
            
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            <CoffeeInfo/>
            
        </ScrollView>
    )

}

const style = StyleSheet.create({
    list:{
        display:"flex",
        flexDirection:"column",
        flexGrow:1,
        backgroundColor:"#BF926E"
    }
})
 