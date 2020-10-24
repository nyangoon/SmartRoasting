import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
    return Font.loadAsync({
        'MV-BOLI': require("../../assets/fonts/mvboli.ttf")
    });
}

export default function Loading() {
    const [dataLoaded, setDataLoaded] = useState(false);
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }

    return (

        <View style={style.container}>
            <Image source={require("../../assets/images/loadingLogo.png")} style={style.logo} resizeMode="contain" />
            <Text style={style.text}>Smart Roasing</Text>
        </View>

    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BF926E",
        alignItems: "center",
        justifyContent: "flex-start"

    },
    logo: {
        flex: 1,
        marginTop: "20%",
        width: "50%",
        height: "100%"
    },
    text: {
        flex: 1,
        fontFamily: "MV-BOLI",
        fontSize: 40
    }
})