import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Collection from './Collection';
import Category from './Category';

class Home extends Component {
  
    render() {
        return (
           <View style={{ flex: 1, backgroundColor: '#D2D4D2' }}>
               <Collection />
               <Category />
            </View>
        );
    }
}

export default Home;
