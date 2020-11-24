import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CoffeeInfo from './CoffeeInfo';
export default function CoffeeBeanList() {

    return (
        <ScrollView style={style.list}>
            
            <CoffeeInfo name={"콜롬비아 마일드"}/>
            <CoffeeInfo name={"에티오피아 하라"}/>
            <CoffeeInfo name={"에티오피아 예가체프"}/>
            <CoffeeInfo name={"하와이언 코나"}/>
            <CoffeeInfo name={"자바"}/>
            <CoffeeInfo name={"케냐 AA"}/>
            <CoffeeInfo name={"모카"}/>
            <CoffeeInfo name={"탄자니아 피베리"}/>
            <CoffeeInfo name={"산토스"}/>
            <CoffeeInfo name={"과테말라 안티구아 SHB"}/>
            <CoffeeInfo name={"코스타리카 따라주"}/>

            
            
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
 