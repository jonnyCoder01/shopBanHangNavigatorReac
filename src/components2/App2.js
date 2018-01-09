import React, { Component } from 'react';
import { StatusBar, Navigator, Text, View } from 'react-native';

import Main2 from '../components2/Main2/Main2';
import Authentication2 from '../components2/Authentication2/Authentication2';
import OrderHistory2 from './OrderHistory2/OrderHistory2';
import ChangeInfo2 from './ChangeInfo2/ChangeInfo2';
StatusBar.setHidden(true);

export default class App extends Component {
  
    render() {
        return (
           
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main2 navigator={navigator}/>;
                        case 'CHANGE_INFO': return <ChangeInfo2 navigator={navigator}/>;
                        case 'AUTHENTICATION': return <Authentication2 navigator={navigator}/>;
                        default:  return <OrderHistory2 navigator={navigator} />;
                    }
                }}
                
            />
        );
    }
}
