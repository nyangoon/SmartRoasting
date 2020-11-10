import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonContainer from './Buttons';
import TakePictureScreen from './TakePictureScreen';

export default function CameraScreen(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const snapHandle = async () => {
        if (cameraRef) {
            const options = { quality: 0.1, base64: true };
            await setPhoto(cameraRef.takePictureAsync(options));
            console.log('photo', photo);
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
        photo === null ?
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
            </View> :
            <TakePictureScreen picture={photo} style={style} />
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
        width: 50,
        height: 100
    }

})