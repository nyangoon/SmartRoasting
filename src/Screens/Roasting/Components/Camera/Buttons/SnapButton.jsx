import React from 'react';

import { TouchableOpacity, View } from 'react-native'

export default function SnapButton(props) {

    const { onPress, style } = props
    return (

        <TouchableOpacity
            style={style.snap}
            onPress={onPress}>
            <View style={style.snapView} />
        </TouchableOpacity>

    )

}