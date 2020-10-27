import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native'
import { AlbumButton, CameraButton } from '.';

export default class RoastingMenu extends Component {
    render() {

        return (
            <View style={style.container}>
                <CameraButton style={style} />
                <AlbumButton style={style} />
            </View>
        );

    }

}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#BF926E",
        alignItems: "center",
        justifyContent: "center",
        padding: "18%"
    },
    Button: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        marginVertical: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 900

    },
    icon: {
        flex: 2,
        width: "30%"
    },
    text: {
        flex: 1,
        fontSize: 20
    }
})