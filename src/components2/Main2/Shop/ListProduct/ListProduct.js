import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

import backList from '../../../../media/appIcon/backList.png';


export default class ListProduct extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { container, header, wrapper, backStyle, titleStyle } = styles;
        return (
            <View style={container} >
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <Image source={backList} style = {backStyle} />
                        <Text  style = {titleStyle} > Party Dress </Text>
                        <View style={{width: 30}} />
                    </View >

                    <View>

                    </View >

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
        
        
    },
    wrapper: {
        backgroundColor: '#fff'
    },
    backStyle: {
        width:30,
        height: 30
    },
    titleStyle : {
        fontSize: 20,
        color: '#AF728D'
    }
});
