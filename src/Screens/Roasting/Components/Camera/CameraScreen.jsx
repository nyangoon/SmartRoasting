import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native'
import ButtonContainer from './Buttons';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={style.cameraContainer} type={type}>
                <View
                    style={style.camera}>
                </View>
                <ButtonContainer Camera={Camera} type={type} setType={setType} />
            </Camera>

        </View>

    )

}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1
    },
    cameraContainer: {
        flex: 1,
        flexDirection: "column"
    },
    camera: {
        flex: 1,
        backgroundColor: "transparent"
    }

})