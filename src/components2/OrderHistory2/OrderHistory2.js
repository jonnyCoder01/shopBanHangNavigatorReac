import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class OrderHistory2 extends Component {
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#9C8278' }}>
                <Text> OrderHistory2 </Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text> go back to main </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
