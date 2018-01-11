import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    
    render() {
        const {container, titleContainer, body, title, productContainer,
            productImage, productName, productPrice  } = styles;
        return (
            <View style={container} >
                <View style={titleContainer} >
                    <Text style={title} > TOP PRODUCT </Text>
                </View>

                <View style={body} >
                    <View style={productContainer} >
                        <Image source={sp1} style={productImage} /> 
                        <Text style={productName} > PRODUCT NAME </Text>
                        <Text style={productPrice} > 300$ </Text>
                    </View>
                    <View style={productContainer} >
                        <Image source={sp2} style={productImage} /> 
                        <Text style={productName} > PRODUCT NAME </Text>
                        <Text style={productPrice} > 250$ </Text>
                    </View>

                    <View style={{ height: 10, width }} />
                    
                    <View style={productContainer} >
                        <Image source={sp3} style={productImage} /> 
                        <Text style={productName} > PRODUCT NAME </Text>
                        <Text style={productPrice} > 300$ </Text>
                    </View>
                    <View style={productContainer} >
                        <Image source={sp4} style={productImage} /> 
                        <Text style={productName} > PRODUCT NAME </Text>
                        <Text style={productPrice} > 250$ </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2 ;
const productHeight = (productWidth / 361) * 452 ;

const styles = StyleSheet.create({
    container: {
        margin: 10, 
        backgroundColor: '#fff',
        shadowColor: 'yellow',
        shadowOffset: {width: 0, height: 20},

    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D4D3D0',
        fontSize: 20,

    },
    body: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       flexWrap: 'wrap'
    },
    productContainer: {
        width: productWidth,
        paddingBottom: 10,
        
      
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }, 
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF'
    }

});