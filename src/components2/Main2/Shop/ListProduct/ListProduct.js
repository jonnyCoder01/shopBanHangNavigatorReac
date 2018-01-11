import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class ListProduct extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }} >
                <Text> list product </Text>
                <TouchableOpacity onPress={this.goBack.bind(this)} >
                    <Text> back </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListProduct;
