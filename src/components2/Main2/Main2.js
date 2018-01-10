import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main2 extends Component {
    
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    componentDidMount() {
        this.drawer.open();
    }

    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
