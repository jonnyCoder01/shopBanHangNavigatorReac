import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Main2 extends Component {
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
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text> Main2 </Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text> go to Authentication </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text> go to gotoChangeInfo </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text> go to gotoOrderHistory </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
