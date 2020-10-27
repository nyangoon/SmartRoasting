import React from 'react';

import { StyleSheet, View } from 'react-native'
import { FlipButton, SnapButton } from '.';

export default function ButtonContainer(props) {

    const { Camera, type, setType } = props;

    const FlipHandle = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }

    const SnapHandle = () => {

    }

    return (

        <View style={style.buttonContainer}>
            <FlipButton style={style} onPress={FlipHandle} />
            <SnapButton style={style} onPress={SnapHandle} />
            <View style={style.view} />
        </View>

    )

}

const style = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 5,
        justifyContent: "space-between"
    },
    flip: {
        flex: 1,
        maxWidth: 70,
        flexDirection: "column",
        flexWrap: "wrap"
    },
    flipIcon: {
        flex: 1,
        maxWidth: 70,
        resizeMode: "contain"
    },
    snap: {
        flex: 1,
        maxWidth: 70,
        height: 70,
        alignSelf: "center",
        borderRadius: 35,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        alignContent: "center",
        justifyContent: "center"

    },
    snapView: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
    },
    view: {
        flex: 1,
        maxWidth: 70,
    }
})