import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Collection from './Collection';

class Home extends Component {
    state = {  }
    render() {
        return (
           <View style={{ flex: 1, backgroundColor: '#D2D4D2' }}>
               <Collection />
            </View>
        );
    }
}

export default Home;
