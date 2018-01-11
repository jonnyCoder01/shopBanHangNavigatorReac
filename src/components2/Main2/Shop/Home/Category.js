import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';


const { height, width } = Dimensions.get('window');
export default class Categoty extends Component {

    render() {
        const { wrapper, textStyle, imageStyle, cateStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent: 'center' }} >
                    <Text style={textStyle} > LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }} >
                    <Swiper >
                        <Image source={littleIcon} style={imageStyle} >
                            <Text style={cateStyle} >Maxi Dress </Text>
                        </Image>
                        <Image source={maxiIcon} style={imageStyle} >
                            <Text style={cateStyle} >Maxi Dress </Text>
                        </Image>
                        <Image source={partyIcon} style={imageStyle} >
                            <Text style={cateStyle} >Maxi Dress </Text>
                        </Image>
                    </Swiper>
                </View>
                
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#30282D',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#9A999A'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cateStyle: {
        fontSize: 15,
        color: '#9A999A'
    },
});
