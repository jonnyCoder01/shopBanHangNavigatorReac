import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcon from '../../media/temp/profile.png';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: true,
        };
    }
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }


    render() {
        const { container, profileStyle, btnStyle, btnText, btnSignInStyle,
            btnTextSignIn, loginContainer, username } = styles;
        const logoutJSX = (
            <View style={{flex: 1}}>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnText} > Sign In </Text>
                    </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}> nguyen van pho </Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn} > Order History </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn} > Change Info </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn} > Sign out </Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;

        return (
            <View style={container}>
                <Image source={profileIcon} style={profileStyle} />
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#29BB9C',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profileStyle: {
        width: 120, height: 120, borderRadius: 60,
        marginBottom: 30,
       
    },
    btnStyle: {

        height: 50,
        borderRadius: 5,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#29BB9C',
        fontSize: 15
    },
    btnSignInStyle: {
        height: 50,
        borderRadius: 5,
        width: 170,
        backgroundColor: '#fff',
        paddingLeft: 10,
        justifyContent: 'center',
        marginBottom: 10
    },
    btnTextSignIn: {
        color: '#29BB9C',
        fontSize: 15
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    username: {
        color: '#fff', 
        fontSize: 20, 
        fontFamily: 'Avenir'
    }
   
});

export default Menu;
