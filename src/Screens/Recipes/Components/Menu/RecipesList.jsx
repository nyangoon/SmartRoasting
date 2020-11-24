import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecipesInfo from './RecipeInfo';
export default function CoffeeBeanList() {

    return (
        <ScrollView style={style.list}>
            
            <RecipesInfo name={"콜롬비아 마일드"}/>
            <RecipesInfo name={"에티오피아 하라"}/>
            <RecipesInfo name={"에티오피아 예가체프"}/>
            <RecipesInfo name={"하와이언 코나"}/>
            <RecipesInfo name={"자바"}/>
            <RecipesInfo name={"케냐 AA"}/>
            <RecipesInfo name={"모카"}/>
            <RecipesInfo name={"탄자니아 피베리"}/>
            <RecipesInfo name={"산토스"}/>
            <RecipesInfo name={"과테말라 안티구아 SHB"}/>
            <RecipesInfo name={"코스타리카 따라주"}/>

            
            
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
 