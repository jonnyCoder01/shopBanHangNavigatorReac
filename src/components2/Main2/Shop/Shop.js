import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#9C8278' }}>
                <Text> Shop </Text>
                <TouchableOpacity onPress={this.openMenu.bind(this)}>
                    <Text> Open Menu </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Shop;
