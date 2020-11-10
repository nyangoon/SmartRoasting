import React from 'react';

import { Image, View } from 'react-native'

export default function TakePictureScreen(props) {

    const { picture, style } = props
    return (

        <View style={{ flex: 1 }}>
            <Image source={{ uri: `data:image/jpeg;base64,${picture.base64}` }} style={style.takedPicture} resizeMode="cover" />
        </View>

    )

}