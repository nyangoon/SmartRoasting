import React from 'react';

import { Image, TouchableOpacity } from 'react-native'

export default function FlipButton(props) {

    const { onPress, style } = props
    return (

        <TouchableOpacity
            style={style.flip}
            onPress={onPress}>
            <Image
                style={style.flipIcon}
                source={require("~/../assets/images/flip_camera_icon.png")} />
        </TouchableOpacity>

    )

}