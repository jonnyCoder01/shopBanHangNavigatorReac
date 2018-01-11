import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions } from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

const { height } = Dimensions.get('window');

export default class Authentication2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: false,
        };
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    render() {
        const { container, row1, controlStyle, iconStyle, titleStyle,
            signInStyle, signUpStyle, inactiveStyle, activeStyle,
            inputStyle, bigButtonStyle, buttonText } = styles;

        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your passworld" />
                <TouchableOpacity style={bigButtonStyle} >
                    <Text style={buttonText}> SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" />
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your passworld" />
                <TextInput style={inputStyle} placeholder="Re-enter your passworld" />
                <TouchableOpacity style={bigButtonStyle} >
                    <Text style={buttonText}> SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)} >
                        <Image style={iconStyle} source={icBack} />
                    </TouchableOpacity>
                    <Text style={titleStyle}> Wearing a Dress </Text>
                    <Image style={iconStyle} source={icLogo} />
                </View>

                {mainJSX}

                <View style={controlStyle} >
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)} >
                        <Text style={this.state.isSignIn ? activeStyle : inactiveStyle}> SIGN IN </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)} >
                        <Text style={this.state.isSignIn ? inactiveStyle : activeStyle}> SIGN UP </Text>
                    </TouchableOpacity>

                </View>


                {/* <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text> go back to main </Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29BB9C',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    controlStyle: {
        flexDirection: 'row',
        width: 270,
        alignItems: 'center'

    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#29BB9C'
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButtonStyle: {
        borderRadius: 20,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1,
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1,
    },
    iconStyle: { width: 25, height: 25 },
    titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 20 }
});

