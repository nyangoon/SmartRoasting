import React, { Component } from 'react';

import { Image, Text, TouchableOpacity } from 'react-native'

class CameraButton extends Component {
    render() {
        const { style } = this.props;
        return (
            <TouchableOpacity style={style.Button}>
                <Image
                    style={style.icon}
                    source={require("../../../../assets/images/album_icon.png")}
                    resizeMode="contain" />
                <Text style={style.text}>앨범에서 골라서 확인</Text>
            </TouchableOpacity>
        );

    }

}

export default CameraButton;