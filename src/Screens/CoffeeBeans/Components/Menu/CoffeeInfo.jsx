import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function CoffeInfo (){

    return(
        <TouchableOpacity style={style.container}>
            <Image source={require("../../../../../assets/images/CoffeeBean_sample.jpg")} 
            style={style.image}/>
            <Text style={style.name}>자메이카 블루마운틴</Text>
        </TouchableOpacity>

    )

}

const style = StyleSheet.create({
    container:{
        marginBottom:1,
        flexDirection:"row",
        backgroundColor:"white",
        alignItems: "center",
        justifyContent:"center",
        height: 200

    },
    image:{
        flex: 0.4,
        resizeMode:"contain",
        
        
    },
    name:{
        flex:1,
        fontSize: 25,
        
    }
})