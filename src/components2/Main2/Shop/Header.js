import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        const { wraper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wraper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image style={iconStyle} source={icMenu} />
                    </TouchableOpacity>
                    <Text style={titleStyle}> Wearing a Dress </Text>
                    <Image style={iconStyle} source={icLogo} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder='What do you want to buy ?'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        height: height / 8, backgroundColor: '#29BB9C',
        padding: 10, justifyContent: 'space-around',
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23, backgroundColor: 'white', marginTop: 5,
        paddingLeft: 10, paddingVertical: 0,
    },
    iconStyle: { width: 25, height: 25 },
    titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 20 }
});
{/* <TouchableOpacity onPress={this.props.onOpen}>
    <Text> Open Menu </Text>
</TouchableOpacity> */}