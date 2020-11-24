import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'



export default function CoffeInfo (props){
    const {name, coffee, info} = props
    const navigation = useNavigation();

    const onPressHandle = () =>{
        navigation.push("RecipesInfo", {name:{name}});
    }
    
    return(
        <TouchableOpacity style={style.container} onPress={onPressHandle}>
            <Image source={require("../../../../../assets/images/CoffeeBean_sample.jpg")} 
            style={style.image}/>
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