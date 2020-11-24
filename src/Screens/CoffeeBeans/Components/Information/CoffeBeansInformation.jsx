import { useRoute } from '@react-navigation/native';
import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native'


export default function CoffeBeansInformation (){
    
    const{name, info} = useRoute().params
    return(
        <ScrollView style={style.container}>
                <View style={style.name}>
                    <Text style={style.headerText}>이름</Text>
                </View>
            <View style={style.header}>
                    <Text style={style.headerText}>Information</Text>
                </View>
            <View style={style.row}>
                <View style={style.normal}>
                    <Text style={style.normarText}>Information Sample Text</Text>
                </View>
            </View>
            <View style={style.header}>
                    <Text style={style.headerText}>Recomended</Text>
                </View>
            <View style={style.row}>
                <View style={style.normal}>
                    <Text style={style.normarText}>Recomended Sample Text</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const style = StyleSheet.create({
    container:{
        display: "flex",
        flexGrow: 1,
        flexDirection:"column",
        backgroundColor:"#BF926E"
    },
    row:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"white",
        margin:2,
        minHeight:300

    },
    column:{
      flex: 1,
      margin:2  
    },
    name:{
        flex:0.3,
        alignItems:"center",
        justifyContent:"center",
        marginTop:3
    },
    header:{
        flex:0.3,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFF0"
    },
    headerText:{
        fontSize:40,
        fontWeight:"bold",
        fontFamily: "MV-BOLI"
    },
    normal:{
        flex:1,    
    },
    normarText:{
        fontSize: 20
    }
})