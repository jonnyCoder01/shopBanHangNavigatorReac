import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class ProductDetail extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }} >
                <Text> ProductDetail </Text>
                <TouchableOpacity onPress={this.goBack.bind(this)} >
                    <Text> back </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default ProductDetail;
