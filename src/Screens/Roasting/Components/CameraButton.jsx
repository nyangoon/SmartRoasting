import React, { Component } from 'react';

import { Image, Text, TouchableOpacity } from 'react-native'

class CameraButton extends Component {
    render() {
        const { style } = this.props;
        return (
            <TouchableOpacity style={style.Button}>
                <Image
                    style={style.icon}
                    source={require("../../../../assets/images/camera_icon.png")}
                    resizeMode="contain" />
                <Text style={style.text}>사진으로 찍어서 확인</Text>
            </TouchableOpacity>
        );

    }

}

export default CameraButton;