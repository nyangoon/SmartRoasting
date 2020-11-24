import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Roastings from '../../../../../assets/images/roasting/index';

SourceSwitch=(img)=>{
    switch(img){
        case "1":
            return Roastings.roasting_1;
        case "2":
            return Roastings.roasting_2; 
        case "3":
            return Roastings.roasting_3; 
        case "4":
            return Roastings.roasting_4; 
        case "5":
            return Roastings.roasting_5; 
        case "6":
            return Roastings.roasting_6; 
        case "7":
            return Roastings.roasting_7; 
        case "8":
            return Roastings.roasting_8; 
    }
}

export default function CoffeInfo (props){
    const {name, info, img} = props
    const navigation = useNavigation();

    const onPressHandle = () =>{
        navigation.push("RoastingInfoInfo", {name:name, info:info});
    }

    
    return(
        <TouchableOpacity style={style.container} onPress={onPressHandle}>
            <Image source={SourceSwitch(img)} style={style.image}/>
            <Text style={style.name}>{name}</Text>
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