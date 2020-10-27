import { Camera } from 'expo-camera';
import React, { forwardRef, useEffect, useState } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonContainer from './Buttons';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    const snapHandle = async () => {
        if (cameraRef) {
            const options = { quality: 1, base64: true };
            let photo = await cameraRef.takePictureAsync(options);
            console.log('poto', photo);
        }
    }

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
                ref={ref => {
                    setCameraRef(ref);
                }}
                style={style.cameraContainer} type={type}>
                <View
                    style={style.camera}>
                </View>
                <ButtonContainer Camera={Camera} type={type} setType={setType} snapHandle={snapHandle} />
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
    },
    takedPicture: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }

})