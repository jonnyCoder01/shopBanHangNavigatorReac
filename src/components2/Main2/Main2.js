import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Main2 extends Component {
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text> Main2 </Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text> go to Authentication </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
